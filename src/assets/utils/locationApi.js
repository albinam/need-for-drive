import axios from 'axios'

export const getCities = () => {
    return axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/city`,
        headers: {
            'X-Api-Factory-Application-Id': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
        }
    })
}

export const getPoints = () => {
    return axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/point`,
        headers: {
            'X-Api-Factory-Application-Id': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
        }
    })
}