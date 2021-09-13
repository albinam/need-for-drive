export function setStep(step) {
    return {
        type: 'SET_STEP',
        payload: step
    }
}

export function setPoint(point) {
    return {
        type: 'SET_POINT',
        payload: point
    }
}

export function setCar(car) {
    return {
        type: 'SET_CAR',
        payload: car
    }
}

export function setColor(color) {
    return {
        type: 'SET_COLOR',
        payload: color
    }
}

export function setDate(dateFrom, dateTo) {
    return {
        type: 'SET_DATE',
        payload: {
            date:{
                dateFrom:dateFrom,
                dateTo:dateTo
            }
        }
    }
}

export function setTariff(tariff) {
    return {
        type: 'SET_TARIFF',
        payload: tariff
    }
}

export function setAdditions(additions) {
    return {
        type: 'SET_ADDITIONS',
        payload: additions
    }
}
