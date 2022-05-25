import { INCREMENT, DECREMENT, REST } from "./counterActionType";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const rest = () => {
    return {
        type: REST
    }
}