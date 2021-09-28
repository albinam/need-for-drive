

export const usePosition = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Not Supported'));
        }
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position)
            return position;
        }, () => {
            reject(new Error('Permission denied'));
        });
    })
};