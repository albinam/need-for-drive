

export const usePosition = () => {
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
