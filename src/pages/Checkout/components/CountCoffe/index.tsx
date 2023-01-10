import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeContext } from "../../../../contexts/CoffeContext";
import { Amount, CoffeContent, CoffeDescription, ImageCoffe, MinusButton, PlusButton, PriceCoffeTotal, Quantity, RemoveButton, TitleCoffe } from "./styles";

interface CountCoffe {
    id: string;
    image: string;
    title: string;
    quantity: number;
    value: number;
}

export function CountCoffe({ id, image, title, quantity, value }: CountCoffe) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity)
    const { cart, handleDeleteOfCart, handleSetQuantity } = useContext(CoffeContext)

    function increaseCoffe() {
        setCurrentQuantity(currentQuantity + 1)
        handleSetQuantity(id, currentQuantity)
    }

    function decreaseCoffe() {
        setCurrentQuantity(currentQuantity - 1)
        handleSetQuantity(id, currentQuantity)
    }

    function click() {
        handleDeleteOfCart(id)
    }

    const formattPrice = value.toLocaleString('pt-br',{minimumFractionDigits: 2})


    return (
        <CoffeContent>
            <ImageCoffe src={`/coffes/${image}.svg`} alt="" />
            <CoffeDescription>
                <div>
                    <TitleCoffe>{title}</TitleCoffe>
                    <Quantity>
                        <Amount>
                            <MinusButton 
                                onClick={decreaseCoffe} 
                                type="button"
                                disabled={currentQuantity === 1 }
                            >
                                <Minus size={14} color="#8047f8" weight="bold" />
                            </MinusButton>
                                {currentQuantity}
                            <PlusButton 
                                onClick={increaseCoffe} 
                                type="button"
                                disabled={currentQuantity === 10 }    
                            >
                                <Plus size={14} color="#8047f8" weight="bold" />
                            </PlusButton>
                        </Amount>
                        <RemoveButton 
                            onClick={click} 
                            type="button"   
                        >
                            <Trash size={16} color="#8047f8" />
                            REMOVER
                        </RemoveButton>
                    </Quantity>
                </div>
                <PriceCoffeTotal>R$ {formattPrice}</PriceCoffeTotal>
            </CoffeDescription>
        </CoffeContent>
    )
}