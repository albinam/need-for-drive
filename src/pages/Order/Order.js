import React, {useEffect, useState} from 'react';
import {getOrderInfo} from "../../assets/utils/orderServices";
import "./Order.scss"
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import {useDispatch} from "react-redux";
import Total from "../../components/Total/Total";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import Loader from "../../components/Loader/Loader";

function CreateOrder() {
    const params = useParams();
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    const [text, setText] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        if (params.id) {
            dispatch(getOrderInfo(params.id));
        }
        if (order.orderStatusId) {
            setLoading(false);
            if (order.orderStatusId.name === "Отмененые") {
                setText("Ваш заказ отменён");
            }
            else if(order.orderStatusId.name === "Подтвержденные") {
                setText("Ваш заказ подтверждён");
            }
            else {
                setText("Ваш заказ еще на подтверждении");
            }
        }
    }, [order]);

    return (
        <div className="order">
            <Menu/>
            <div className="order_container">
                <Header/>
                <OrderSteps/>
                {(loading) ? <Loader/> :
                    <div className="order_container_tab">
                        <div className="order_container_tab_total">
                            <div className="order_container_tab_total_text">{text}</div>
                            <Total/>
                        </div>
                        <OrderInfo/>
                    </div>
                }
            </div>
        </div>
    );
}

export default CreateOrder;