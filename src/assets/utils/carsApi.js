import axios from "axios";
import {setApiInfoCars, setApiInfoCategories, setApiInfoRates} from "../../redux/actions/actions";

const myAxios = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api',
    headers: {
        'X-Api-Factory-Application-Id': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
    }
});

export const getCars = () => {
    return (dispatch) => {
        myAxios.get('/db/car')
            .then((resp) => {
                dispatch(setApiInfoCars(resp.data.data));
            })
    }
}

export const getRate = () => {
    return (dispatch) => {
        myAxios.get('/db/rate')
            .then((resp) => {
                const tariff = resp.data.data.map((data) => ({
                    id: data.id,
                    name: data.rateTypeId.name + ", " + data.price + "₽/" + data.rateTypeId.unit,
                    price: data.price
                }));
                console.log(tariff)
                dispatch(setApiInfoRates(tariff));
            })
    }
}


export async function getCarsByCategory(category) {
    const res = await myAxios.get(`/db/car?categoryId=${category}`)
    return res.data;
}

export const getCategories = () => {
    return (dispatch) => {
        myAxios.get('/db/category')
            .then((resp) => {
                dispatch(setApiInfoCategories(resp.data.data));
            })
    }
}