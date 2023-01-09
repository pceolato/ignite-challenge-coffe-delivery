import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeContext } from "../../../../contexts/CoffeContext";
import { Amount, CartButton, CartContainer, MinusButton, PlusButton, Price, PurchaseCoffe } from "./styles";

interface AmountCartProps {
    id: string;
}

export function AmountCart({id}: AmountCartProps) {
    const { coffes ,handleSetCart } = useContext(CoffeContext)
    const [ amountCoffe, setAmountCoffe ] = useState(1)

    function increaseCoffe() {
        setAmountCoffe(amountCoffe + 1)
    }

    function decreaseCoffe() {
        setAmountCoffe(amountCoffe - 1)
    }

    function addNewOrder() {
        const coffeSellect = coffes.find(coffe => coffe.id === id)

        if(coffeSellect !== undefined) {
            const coffeOrder = {
                ...coffeSellect,
                quantity: amountCoffe
            }
    
            handleSetCart(coffeOrder)
        }
    }
    
    return (
        <PurchaseCoffe>
            <Price>
                <span>R$</span>
                9,90
            </Price>
            <CartContainer>
                <Amount>
                    <MinusButton onClick={decreaseCoffe} disabled={amountCoffe <= 1}>
                        <Minus size={14} color="#8047f8" weight="bold" />
                    </MinusButton>
                    {amountCoffe}
                    <PlusButton onClick={increaseCoffe} disabled={amountCoffe >= 10}>
                        <Plus size={14} color="#8047f8" weight="bold" />
                    </PlusButton>
                </Amount>
                <CartButton onClick={addNewOrder}>
                    <ShoppingCart size={24} color="#f3f2f2" weight="fill" />
                </CartButton>
            </CartContainer>
        </PurchaseCoffe>
    )
}