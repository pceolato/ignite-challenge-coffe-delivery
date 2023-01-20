import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { Amount, CoffeeContent, CoffeeDescription, ImageCoffee, MinusButton, PlusButton, PriceCoffeeTotal, Quantity, RemoveButton, RemoveButtonIcon, StyledMinus, StyledPlus, TitleCoffee } from "./styles";

interface CountCoffee {
    id: string;
    image: string;
    title: string;
    quantity: number;
    value: number;
}

export function CountCoffee({ id, image, title, quantity, value }: CountCoffee) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity)
    const { cart, handleDeleteOfCart, handleSetQuantity } = useContext(CoffeeContext)

    function increaseCoffee() {
        const QuantityPlus = currentQuantity + 1
        setCurrentQuantity(QuantityPlus)
        handleSetQuantity(id, QuantityPlus)
    }

    function decreaseCoffee() {
        const QuantityMinus = currentQuantity - 1
        setCurrentQuantity(QuantityMinus)
        handleSetQuantity(id, QuantityMinus)
    }

    function click() {
        handleDeleteOfCart(id)
    }

    const formattPrice = value.toLocaleString('pt-br',{minimumFractionDigits: 2})


    return (
        <CoffeeContent>
            <ImageCoffee src={`/coffees/${image}.svg`} alt="" />
            <CoffeeDescription>
                <div>
                    <TitleCoffee>{title}</TitleCoffee>
                    <Quantity>
                        <Amount>
                            <MinusButton 
                                onClick={decreaseCoffee} 
                                type="button"
                                disabled={currentQuantity <= 1 }
                            >
                               <StyledMinus size={14} weight="bold" />
                            </MinusButton>
                                {currentQuantity}
                            <PlusButton 
                                onClick={increaseCoffee} 
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
                <PriceCoffeeTotal>
                    R$ {formattPrice}
                    <RemoveButtonIcon 
                            onClick={click} 
                            type="button"   
                        >
                            <Trash size={16} color="#8047f8" />
                    </RemoveButtonIcon>
                </PriceCoffeeTotal>
            </CoffeeDescription>
        </CoffeeContent>
    )
}