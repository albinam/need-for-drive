import axios from "axios";
import {setApiInfoCars, setApiInfoCategories} from "../../redux/actions/actions";

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
export const getCategories = () => {
    return (dispatch) => {
        myAxios.get('/db/category')
            .then((resp) => {
                dispatch(setApiInfoCategories(resp.data.data))
            })
    }
}