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
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(true);

    useEffect(() => {
        setLoading(true)
        if (params.id && id!==order.orderStatusId?.id) {
            dispatch(getOrderInfo(params.id));
        }
        if (order.city) {
            setId(order.orderStatusId?.id)
            setLoading(false)
        }

    }, [order]);

    const getText = () => {
        if (order.orderStatusId) {
            if (order.orderStatusId.name === "Отмененые") {
                return "Ваш заказ отменён";
            } else if (order.orderStatusId.name === "Подтвержденные") {
                return "Ваш заказ подтверждён";
            } else {
                return "Ваш заказ еще на подтверждении";
            }
        }
    }

    return (
        <div className="order">
            <Menu/>
            <div className="order_container">
                <Header/>
                <OrderSteps/>
                {(loading) ? <Loader/> :
                    <div className="order_container_tab">
                        <div className="order_container_tab_total">
                            <div className="order_container_tab_total_text">{getText()}</div>
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