import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { CoffeesUtils } from "../utils/coffees";
import { cartReducer } from "../reducers/cart/reducer";
import { handleClearCartAction, handleDeleteOfCartAction, handleSetCartAction, handleSetQuantityAction } from "../reducers/cart/actions";

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

    const [cart, dispatch] = useReducer(
        cartReducer, 
        [], 
        () => {
            const storage = localStorage.getItem('@coffee-delivery-cart')
            if(storage) {
                return JSON.parse(storage)
            }
            return []
        }
    )

    function handleSetCart(order: Coffee) {
        dispatch(handleSetCartAction(order))
    }

    function handleSetQuantity(id: string, quantity: number) {
        dispatch(handleSetQuantityAction(id, quantity))
    }

    function handleDeleteOfCart(id: string) {
        dispatch(handleDeleteOfCartAction(id))
    }

    function handleClearCart() {
        dispatch(handleClearCartAction())
    }
    
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