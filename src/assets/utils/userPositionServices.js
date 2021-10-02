import {setCoords} from "../../redux/actions/actions";


export const getUserPosition = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Определение геолокации не поддерживается'));
        }
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position)
            return position;
        }, () => {
            reject(new Error('Доступ запрещен'));
        });
    })
};

export const dispatchUserCoords = () => {
    return (dispatch) => {
        getUserPosition().then(r =>
            dispatch(setCoords(r.coords.latitude,r.coords.longitude)))
    }
}


