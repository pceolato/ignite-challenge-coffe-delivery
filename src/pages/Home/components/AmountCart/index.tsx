import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Amount, CartButton, CartContainer, MinusButton, PlusButton, Price, PurchaseCoffe } from "./styles";

export function AmountCart() {
    return (
        <PurchaseCoffe>
            <Price>
                <span>R$</span>
                9,90
            </Price>
            <CartContainer>
                <Amount>
                    <MinusButton>
                        <Minus size={14} color="#8047f8" weight="bold" />
                    </MinusButton>
                    1
                    <PlusButton>
                        <Plus size={14} color="#8047f8" weight="bold" />
                    </PlusButton>
                </Amount>
                <CartButton>
                    <ShoppingCart size={24} color="#f3f2f2" weight="fill" />
                </CartButton>
            </CartContainer>
        </PurchaseCoffe>
    )
}