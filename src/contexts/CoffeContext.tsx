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
    quantity?: number;
}

type CartType = Coffe

interface CoffeContextType {
    coffes: Coffe[];
    cart: any
    handleSetCart:(order: any) => void;
}

interface CoffeContextProviderProps {
    children: ReactNode
}

export const CoffeContext = createContext<CoffeContextType>({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const coffesList = CoffesUtils

    const [coffes, setCoffes] = useState<Coffe[]>(coffesList)

    // const [cart, setCart] = useState<any>([])
    const [cart, dispatch] = useReducer((state: any, action: any) => {
        switch(action.type) {

            case 'ADD_ORDER_IN_CART': {
                const currentOrderIndex = state.findIndex((order: any) => {
                    return order.id === action.id
                })

                if(currentOrderIndex < 0) {
                    return [...state, action.payload.order]
                }

                return produce(state, (draft: any) => {
                    const currentQuantity = state[currentOrderIndex].quantity
                    draft[currentOrderIndex].quantity = currentQuantity + action.payload.order.quantity
                })
            }
        }
    }, [])

    function handleSetCart(order: any) {
        dispatch({
            type: 'ADD_ORDER_IN_CART',
            payload: {
                order
            },
            id: order.id
        })
    }

    useEffect(() => {
        
    }, [cart])

    return (
        <CoffeContext.Provider value={{coffes, handleSetCart, cart}}>
            { children }
        </CoffeContext.Provider>
    )
}