import { Coffee } from "./reducer"

export enum ActionTypes {
    ADD_ORDER_IN_CART = 'ADD_ORDER_IN_CART',
    DELETE_OF_CART = 'DELETE_OF_CART',
    SET_QUANTITY = 'SET_QUANTITY',
    CLEAR_CART = 'CLEAR_CART'
}

export function handleSetCartAction(order: Coffee) {
    return {
        type: ActionTypes.ADD_ORDER_IN_CART,
        payload: {
            order,
            id: order.id,
        }
    }
}

export function handleSetQuantityAction(id: string, quantity: number) {
    return {
        type: ActionTypes.SET_QUANTITY,
        payload: {
            id, 
            quantity
        }
    }
}

export function handleDeleteOfCartAction(id: string) {
    return {
        type: ActionTypes.DELETE_OF_CART,
        payload: {
            id
        }
    }
}

export function handleClearCartAction() {
    return {
        type: ActionTypes.CLEAR_CART
    }
}