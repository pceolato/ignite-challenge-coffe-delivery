import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeContext } from "../../../../contexts/CoffeContext";
import { Amount, CoffeContent, CoffeDescription, ImageCoffe, MinusButton, PlusButton, PriceCoffeTotal, Quantity, RemoveButton, StyledMinus, StyledPlus, TitleCoffe } from "./styles";

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
        const QuantityPlus = currentQuantity + 1
        setCurrentQuantity(QuantityPlus)
        handleSetQuantity(id, QuantityPlus)
    }

    function decreaseCoffe() {
        const QuantityMinus = currentQuantity - 1
        setCurrentQuantity(QuantityMinus)
        handleSetQuantity(id, QuantityMinus)
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
                                disabled={currentQuantity <= 1 }
                            >
                               <StyledMinus size={14} weight="bold" />
                            </MinusButton>
                                {currentQuantity}
                            <PlusButton 
                                onClick={increaseCoffe} 
                                type="button"
                            >
                                <StyledPlus size={14} weight="bold" />
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