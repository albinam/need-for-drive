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

export function setCar(car) {
    return {
        type: 'SET_CAR',
        payload: car
    }
}

export function setPrice(price) {
    return {
        type: 'SET_PRICE',
        payload: price
    }
}

export function setDuration(duration) {
    return {
        type: 'SET_DURATION',
        payload: duration
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

export function setCoords(lat, lon) {
    return {
        type: 'SET_COORDS',
        payload: {
            latitude:lat,
            longitude:lon,
        }
    }
}

export function setApiInfoPoints(point) {
    return {
        type: 'SET_POINTS',
        payload: point
    }
}

export function setApiInfoCities(city) {
    return {
        type: 'SET_CITIES',
        payload: city
    }
}

export function setApiInfoCitiesCoords(coords) {
    return {
        type: 'SET_CITIESCOORDS',
        payload: coords
    }
}

export function setApiInfoCars(cars) {
    return {
        type: 'SET_CARS',
        payload: cars
    }
}

export function setApiInfoCategories(categories) {
    return {
        type: 'SET_CATEGORIES',
        payload: categories
    }
}

export function setMarker(marker) {
    return {
        type: 'SET_MARKERS',
        payload: marker
    }
}


