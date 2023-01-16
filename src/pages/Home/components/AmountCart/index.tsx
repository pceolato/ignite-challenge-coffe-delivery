import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { Amount, CartButton, CartContainer, MinusButton, PlusButton, Price, PurchaseCoffee, StyledMinus, StyledPlus } from "./styles";

interface AmountCartProps {
    id: string;
    price: number;
}

export function AmountCart({id, price}: AmountCartProps) {
    const { coffees, handleSetCart } = useContext(CoffeeContext)
    const [ amountCoffee, setAmountCoffee ] = useState(1)

    function increaseCoffee() {
        setAmountCoffee(state => state + 1)
    }

    function decreaseCoffee() {
        setAmountCoffee(state => state - 1)
    }

    function addNewOrder() {
        const coffeeSellect = coffees.find(coffee => coffee.id === id)

        if(coffeeSellect !== undefined) {
            const coffeOrder = {
                ...coffeeSellect,
                quantity: amountCoffee
            }
    
            handleSetCart(coffeOrder)
        }
    }

    const formattPrice = price.toLocaleString('pt-br',{minimumFractionDigits: 2})
    
    return (
        <PurchaseCoffee>
            <Price>
                <span>R$</span>
                {formattPrice}
            </Price>
            <CartContainer>
                <Amount>
                    <MinusButton onClick={decreaseCoffee} disabled={amountCoffee <= 1}>
                        <StyledMinus size={14} weight="bold" />
                    </MinusButton>
                    {amountCoffee}
                    <PlusButton onClick={increaseCoffee}>
                        <StyledPlus size={14} weight="bold" />
                    </PlusButton>
                </Amount>
                <CartButton onClick={addNewOrder}>
                    <ShoppingCart size={24} color="#f3f2f2" weight="fill" />
                </CartButton>
            </CartContainer>
        </PurchaseCoffee>
    )
}