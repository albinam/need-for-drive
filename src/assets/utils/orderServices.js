import axios from "axios";
import {setOrder, setStatus} from "../../redux/actions/actions";
import {getOrder} from "./utils";

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
            dispatch(setStatus(resp.data.data))
        });
    }
}

export async function placeOrder(order, status) {
    const orderInfo = await getOrder(order, status,"post");
    let orderId;
    await myAxios.post('/db/order', orderInfo).then((resp) => orderId = resp.data.data.id);
    return orderId;
}

export function getOrderInfo(id) {
    return (dispatch) => {
        myAxios.get(`/db/order/${id}`)
            .then((resp) => {
                dispatch(setOrder(getOrder(resp.data.data, null, "get"))
                    )
                }
            )
    }
}

export async function cancelOrder(order, status) {
    const orderInfo = await getOrder(order, status, "post");
    myAxios.put(`/db/order/${order.id}`, orderInfo).then(() => {
        window.location.reload();
    });
}