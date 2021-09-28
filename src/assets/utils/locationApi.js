import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api',
    headers: {
        'X-Api-Factory-Application-Id': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
    }
});
export const getCities = () => {
    return  myAxios.get('/db/city')
}

export const getPoints = () => {
    return  myAxios.get('/db/point')
}