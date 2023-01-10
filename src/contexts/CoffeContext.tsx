import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { CoffesUtils } from "../utils/coffes";
import { produce } from "immer";

interface Coffe{
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    price: number;
    quantity: number;
}

interface CoffeContextType {
    coffes: Coffe[];
    cart: Coffe[];
    handleSetCart:(order: Coffe) => void;
    handleDeleteOfCart:(id: string) => void;
    handleSetQuantity:(id: string, quantity: number) => void;
}

interface CoffeContextProviderProps {
    children: ReactNode
}

export const CoffeContext = createContext<CoffeContextType>({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const coffesList = CoffesUtils

    const [coffes, setCoffes] = useState<Coffe[]>(coffesList)

    const [cart, dispatch] = useReducer((state: Coffe[], action: any)  => {
        switch(action.type) {
            //TODO
            case 'CARRY_CART': {
                return action.payload.storage
            }

            case 'ADD_ORDER_IN_CART': {
                const currentOrderIndex = state.findIndex(order => {
                    return order.id === action.id
                })

                if(currentOrderIndex < 0) {
                    return [...state, action.payload.order]
                }

                return produce(state, draft => {
                    const currentQuantity = state[currentOrderIndex].quantity
                    draft[currentOrderIndex].quantity = currentQuantity + action.payload.order.quantity
                })
            }

            case 'DELETE_OF_CART': {
                const newCart = state.filter(order => {
                    return order.id !== action.payload.id
                })
                
                if(newCart) {
                    return newCart
                }
            }

            case 'SET_QUANTITY': {
                const currentOrderIndex = state.findIndex(order => {
                    return order.id === action.payload.id
                })

                if(currentOrderIndex < 0) {
                    return 
                }

                return produce(state, draft => {
                    draft[currentOrderIndex].quantity = action.payload.quantity
                })
            }

            default: 
                return state
        }
    }, [])

    function handleSetCart(order: Coffe) {
        dispatch({
            type: 'ADD_ORDER_IN_CART',
            payload: {
                order
            },
            id: order.id
        })
    }

    function handleSetQuantity(id: string, quantity: number) {
        dispatch({
            type: 'SET_QUANTITY',
            payload: {
                id,
                quantity
            }
        })
    }

    function handleDeleteOfCart(id: string) {
        dispatch({
            type: 'DELETE_OF_CART',
            payload: {
                id
            }
        })
    }
    
    useEffect(() => {
        const storage = localStorage.getItem('@coffe-delivery-coffes')
        if(storage !== null) {
            dispatch({
                type: 'CARRY_CART',
                payload: {
                    storage: JSON.parse(storage)
                },
            })
        }
    }, [])
    
    useEffect(() => {
        if(cart.length !== 0) {
            localStorage.setItem('@coffe-delivery-coffes', JSON.stringify(cart))
        } else {
            localStorage.removeItem('@coffe-delivery-coffes')
        }
    }, [cart])

    return (
        <CoffeContext.Provider value={{coffes, handleSetCart, cart, handleDeleteOfCart, handleSetQuantity}}>
            { children }
        </CoffeContext.Provider>
    )
}