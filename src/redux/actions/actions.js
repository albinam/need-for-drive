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

export function setCity(city) {
    return {
        type: 'SET_CITY',
        payload: city
    }
}

export function setCar(id, name) {
    return {
        type: 'SET_CAR',
        payload: {
            id: id,
            name: name
        }
    }
}

export function setColor(color) {
    return {
        type: 'SET_COLOR',
        payload: color
    }
}

export function setDateFrom(dateFrom) {
    return {
        type: 'SET_DATE_FROM',
        payload: dateFrom
    }
}

export function setDateTo(dateTo) {
    return {
        type: 'SET_DATE_TO',
        payload: dateTo
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

export function deleteAdditions(additions) {
    return {
        type: 'DELETE_ADDITIONS',
        payload: additions
    }
}
