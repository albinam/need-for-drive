import axios from 'axios'
import {setApiInfoCities, setApiInfoPoints} from "../../redux/actions/actions";

const myAxios = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api',
    headers: {
        'X-Api-Factory-Application-Id': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
    }
});
export const getCities = () => {
    return (dispatch) => {
        myAxios.get('/db/city')
            .then((response) => {
                dispatch(setApiInfoCities(response.data.data));
            })
    }
}

export const getPoints = () => {
    return (dispatch) => {
        myAxios.get('/db/point')
            .then((response) => {
                dispatch(setApiInfoPoints(response.data.data));
            })
    }
}