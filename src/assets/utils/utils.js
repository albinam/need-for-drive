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
        let totalPrice;
        if (tariff.unit === "мин") {
            totalPrice = tariff.price * (duration[0] * 1440 + duration[1] * 60 + duration[2])
        }
        if (tariff.unit === "сутки") {
            if (duration[1] || duration[2]) {
                totalPrice = tariff.price * (duration[0] + 1);
            } else {
                totalPrice = tariff.price * duration[0];
            }
        }
        if (tariff.unit === "7 дней") {
            totalPrice = tariff.price * Math.ceil((duration[0]) / 7);
        }
        if (tariff.unit === "30 дней") {
            totalPrice = tariff.price * Math.ceil((duration[0]) / 30);
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

export const getOrder = (orderStore, status, type) =>{
    let order;
    if (type === "post") {
        order = {
            orderStatusId: status,
            cityId: orderStore.city.id,
            pointId: orderStore.point.id,
            carId: orderStore.car.id,
            color: orderStore.color,
            dateFrom: moment(orderStore.dateFrom).format("x"),
            dateTo: moment(orderStore.dateTo).format("x"),
            rateId: orderStore.tariff.id,
            price: orderStore.price,
            isFullTank: orderStore.additions.includes("Полный бак, 500р"),
            isNeedChildChair: orderStore.additions.includes("Детское кресло, 200р"),
            isRightWheel: orderStore.additions.includes("Правый руль, 1600р")
        }
    }
    if (type === "get") {
        const adds = orderStore.isFullTank ? ["Полный бак, 500р"] : [];
        if (orderStore.isNeedChildChair)
            adds.push("Детское кресло, 200р");
        if (orderStore.isRightWheel)
            adds.push("Правый руль, 1600р");
        order = {
            city: orderStore.cityId,
            point: orderStore.pointId,
            car: orderStore.carId,
            color: orderStore.color,
            tariff: {
                id: orderStore.rateId.id,
                name: orderStore.rateId.rateTypeId.name + ", " + orderStore.rateId.price + "₽/" + orderStore.rateId.rateTypeId.unit,
                price: orderStore.rateId.price,
                unit: orderStore.rateId.rateTypeId.unit
            },
            dateFrom: moment(orderStore.dateFrom),
            dateTo: moment(orderStore.dateTo),
            duration: getDuration(moment(orderStore.dateFrom), moment(orderStore.dateTo)),
            additions: adds,
            price: orderStore.price,
            orderStatusId: orderStore.orderStatusId,
            id: orderStore.id
        }
    }
    return order;
}