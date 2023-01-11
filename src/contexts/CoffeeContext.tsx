import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { CoffeesUtils } from "../utils/coffees";
import { produce } from "immer";

interface Coffee{
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    price: number;
    quantity: number;
}

interface CoffeeContextType {
    coffees: Coffee[];
    cart: Coffee[];
    handleSetCart:(order: Coffee) => void;
    handleDeleteOfCart:(id: string) => void;
    handleSetQuantity:(id: string, quantity: number) => void;
    handleClearCart:() => void;
}

interface CoffeeContextProviderProps {
    children: ReactNode
}

export const CoffeeContext = createContext<CoffeeContextType>({} as CoffeeContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
    const coffeesList = CoffeesUtils

    const [coffees, setCoffees] = useState<Coffee[]>(coffeesList)

    const [cart, dispatch] = useReducer((state: Coffee[], action: any)  => {
        switch(action.type) {
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

            case 'CLEAR_CART': {
                return state = []
            }

            default: 
                return state
        }
    }, [])

    function handleSetCart(order: Coffee) {
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

    function handleClearCart() {
        dispatch({ type: 'CLEAR_CART' })
    }
    
    useEffect(() => {
        const storage = localStorage.getItem('@coffee-delivery-cart')
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
            localStorage.setItem('@coffee-delivery-cart', JSON.stringify(cart))
        } else {
            localStorage.removeItem('@coffee-delivery-cart')
        }
    }, [cart])

    return (
        <CoffeeContext.Provider 
            value={{
                coffees,
                handleSetCart,
                cart,
                handleDeleteOfCart,
                handleSetQuantity,
                handleClearCart
            }}>
            { children }
        </CoffeeContext.Provider>
    )
}