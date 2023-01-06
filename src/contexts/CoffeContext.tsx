import { createContext, ReactNode, useState } from "react";
import { Coffes } from "../utils/coffes";

interface Coffe{
    title: string;
    description: string;
    features: string[];
    image: string;
    price: string;
    quantity: number;
}

interface CoffeContextType {
    coffes: Coffe[]
}

interface CoffeContextProviderProps {
    children: ReactNode
}

export const CoffeContext = createContext<CoffeContextType>({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const coffesList = Coffes

    const [coffes, setCoffes] = useState<Coffe[]>(coffesList)


    return (
        <CoffeContext.Provider value={{coffes}}>
            { children }
        </CoffeContext.Provider>
    )
}