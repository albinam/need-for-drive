import moment from "moment";

export const disabled = (step, order) => {
    if (step === 1) {
        return !(order.city && order.point);
    }
    if (step === 2) {
        return !(order.car != null);
    }
    if (step === 3) {
        return !(order.color != null && order.dateFrom != null && order.dateTo != null && order.tariff!=null);
    }
}

export const getDuration = (order) => {
    let result;
    if(order.dateFrom && order.dateTo) {
        let duration = moment.duration(order.dateTo.diff(order.dateFrom));
        let hours = duration.asHours();
        if (hours > 24) {
            if (duration.asHours() % 24 !== 0) {
                if(Math.round(duration.asHours()) % 24 === 0) {
                    result = Math.round(duration.asDays()) + " д ";
                }
                else{
                    result = Math.round(duration.asDays()) + " д " + Math.round(duration.asHours()) % 24 + " ч ";
                }
                if (Math.round(duration.asMinutes()) % 60 !== 0) {
                    result=result + Math.round(duration.asMinutes()) % 60 + " мин ";
                }
            } else {
                result = duration.asDays() + " д ";
            }
        } else {
            result = hours + " ч ";
        }
        return result;
    }
    return null;
}