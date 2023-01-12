import { Coffee } from "./reducer"

export enum ActionTypes {
    CARRY_CART = 'CARRY_CART',
    ADD_ORDER_IN_CART = 'ADD_ORDER_IN_CART',
    DELETE_OF_CART = 'DELETE_OF_CART',
    SET_QUANTITY = 'SET_QUANTITY',
    CLEAR_CART = 'CLEAR_CART'
}

export function getCartAction(cart: any) {
    return {
        type: ActionTypes.CARRY_CART,
        payload: {
            storage: JSON.parse(cart)
        },
    }
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