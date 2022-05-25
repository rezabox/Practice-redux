import { INCREMENT_AGE, DECREMENT_AGE, REST_AGE } from "./ageCounterActionType";

export const incrementAge = () => {
    return {
        type: INCREMENT_AGE
    }
}

export const decrementAge = () => {
    return {
        type: DECREMENT_AGE
    }
}

export const restAge = () => {
    return {
        type: REST_AGE
    }
}