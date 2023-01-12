import { produce } from 'immer'
import { ActionTypes } from './actions';

export interface Coffee{
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    price: number;
    quantity: number;
}

export function cartReducer(state: Coffee[], action: any): Coffee[] {
    switch(action.type) {
        
        case ActionTypes.ADD_ORDER_IN_CART: {
            const currentOrderIndex = state.findIndex(order => {
                return order.id === action.payload.id
            })

            if(currentOrderIndex < 0) {
                return [...state, action.payload.order]
            }

            return produce(state, draft => {
                const currentQuantity = state[currentOrderIndex].quantity
                draft[currentOrderIndex].quantity = currentQuantity + action.payload.order.quantity
            })
        }

        case ActionTypes.DELETE_OF_CART: {
            const newCart = state.filter(order => {
                return order.id !== action.payload.id
            })
            
            if(newCart) {
                return newCart
            }
        }

        case ActionTypes.SET_QUANTITY: {
            const currentOrderIndex = state.findIndex(order => {
                return order.id === action.payload.id
            })

            if(currentOrderIndex >= 0) {
                return produce(state, draft => {
                    draft[currentOrderIndex].quantity = action.payload.quantity
                })
            }

        }

        case ActionTypes.CLEAR_CART: {
            return state = []
        }

        default: 
            return state
    }
}