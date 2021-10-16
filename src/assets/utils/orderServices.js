import axios from "axios";
import {setOrder, setStatus} from "../../redux/actions/actions";
import {getDuration} from "./utils";
import moment from "moment";

const myAxios = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api',
    headers: {
        'X-Api-Factory-Application-Id': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
    }
});

export function getStatus() {
    return (dispatch) => {
        myAxios.get('/db/orderStatus').then(resp => {
            dispatch(setStatus(resp.data.data))});
    }
}

export async function placeOrder(order,status) {
    const orderInfo = await getOrder(order, status);
    let orderId;
    await myAxios.post('/db/order', orderInfo).then((resp) => orderId = resp.data.data.id);
    return orderId;
}

export function getOrderInfo(id) {
    return (dispatch) => {
        myAxios.get(`/db/order/${id}`)
            .then((resp) => {
                    const order = resp.data.data;
                    const adds = order.isFullTank ? ["Полный бак, 500р"] : [];
                    if (order.isNeedChildChair)
                        adds.push("Детское кресло, 200р");
                    if (order.isRightWheel)
                        adds.push("Правый руль, 1600р");
                    dispatch(setOrder({
                            city: order.cityId,
                            point: order.pointId,
                            car: order.carId,
                            color: order.color,
                            tariff: {
                                id: order.rateId.id,
                                name: order.rateId.rateTypeId.name + ", " + order.rateId.price + "₽/" + order.rateId.rateTypeId.unit,
                                price: order.rateId.price,
                                unit: order.rateId.rateTypeId.unit
                            },
                            dateFrom: moment(order.dateFrom),
                            dateTo: moment(order.dateTo),
                            duration: getDuration(moment(order.dateFrom), moment(order.dateTo)),
                            additions: adds,
                            price: order.price,
                            orderStatusId: order.orderStatusId,
                            id: order.id
                        }
                        )
                    )
                }
            )
    }
}

export async function cancelOrder(order,status) {
    const orderInfo = await getOrder(order, status);
    myAxios.put(`/db/order/${order.id}`, orderInfo).then(() => {
        window.location.reload();
    });
}

async function getOrder(orderStore, status) {
    const order = {
        orderStatusId: status,
        cityId: orderStore.city.id,
        pointId: orderStore.point.id,
        carId: orderStore.car.id,
        color: orderStore.color,
        dateFrom: moment(orderStore.dateFrom).format("x"),
        dateTo:moment(orderStore.dateTo).format("x"),
        rateId: orderStore.tariff.id,
        price: orderStore.price,
        isFullTank: orderStore.additions.includes("Полный бак, 500р"),
        isNeedChildChair: orderStore.additions.includes("Детское кресло, 200р"),
        isRightWheel: orderStore.additions.includes("Правый руль, 1600р")
    }
    return order;
}