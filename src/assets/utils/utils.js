import moment from "moment";

export const disabled = (step, order) => {
    if (step === 1) {
        return !(order.city && order.point);
    }
    if (step === 2) {
        return !(order.car != null);
    }
    if (step === 3) {
        return !(order.color != null && order.dateFrom != null && order.dateTo != null && order.tariff != null);
    }
}
export const getPrice = (duration, tariff, additions, deleteAdd) => {
    if (duration && tariff) {
        let price = parseInt((tariff.split(", ")[1]).split("₽")[0]);
        let totalPrice;
        if (price === 1999) {
            if (duration[1] || duration[2]) {
                totalPrice = price * (duration[0] + 1);
            } else {
                totalPrice = price * duration[0];
            }
        } else {
            totalPrice = price * (duration[0] * 1440 + duration[1] * 60 + duration[2]);
        }
        if (additions) {
            additions.map(add => {
                totalPrice += parseInt((add.split(", ")[1]).split("р")[0])
            })
        }
        if (deleteAdd) {
            totalPrice -= parseInt((deleteAdd.split(", ")[1]).split("р")[0])
        }
        return totalPrice;
    }
}


export const getDuration = (dateFrom, dateTo) => {
    let result = [null, null, null];
    if (dateFrom && dateTo) {
        let duration = moment.duration(dateTo.diff(dateFrom));
        let hours = duration.asHours();
        if (hours > 24) {
            if (duration.asHours() % 24 !== 0) {
                if (Math.round(duration.asHours()) % 24 === 0) {
                    result[0] = Math.round(duration.asDays());
                } else {
                    result[0] = Math.round(duration.asDays());
                    result[1] = Math.round(duration.asHours()) % 24;
                }
                if (Math.round(duration.asMinutes()) % 60 !== 0) {
                    result[2] = Math.round(duration.asMinutes()) % 60;
                }
            } else {
                result[0] = duration.asDays();
            }
        } else {
            if (Math.round(duration.asMinutes()) % 60 !== 0) {
                result[2] = Math.round(duration.asMinutes());
            }
            if (hours % 24 === 0) {
                result[1] = hours;
            }
        }
        return result;
    }
}