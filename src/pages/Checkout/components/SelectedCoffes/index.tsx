import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CoffeContext } from "../../../../contexts/CoffeContext";
import { CountCoffe } from "../CountCoffe";
import { CalculatePrice, Coffes, CoffesCountContainer, ConfesCountContent, ConfirmButton, ItemsTotal, Title, TotalOrder } from "./styles";

interface SelectedCoffesProps {
    typePayment?: string;
}


export function SelectedCoffes({ typePayment }: SelectedCoffesProps) {
    const { cart } = useContext(CoffeContext);
    const navigate = useNavigate();
    
    function handleBackToHome() {
        navigate('/')
    }

    const totalPrice = cart?.map((order) => order.price * order.quantity)
    .reduce((to, from) => to + from, 0);
    
    const formattPrice = totalPrice.toLocaleString('pt-br',{minimumFractionDigits: 2})
    const formattPriceTotal = (totalPrice + 3.50).toLocaleString('pt-br',{minimumFractionDigits: 2})

    return (
        <CoffesCountContainer>
                <Title>Cafés selecionados</Title>
                <ConfesCountContent>
                    <Coffes>
                        { cart?.map(order => (
                            <CountCoffe 
                                id={order.id}
                                key={order.id}
                                title={order.title} 
                                quantity={order.quantity}
                                image={order.image}
                                value={order.price}
                            />
                        )) }
                    </Coffes>
                    <CalculatePrice>
                        {
                            cart.length !== 0 ? (
                            <>
                                <ItemsTotal>
                                    Total de itens
                                    <span>R$ {formattPrice}</span>
                                </ItemsTotal>
                                <ItemsTotal>
                                    Entrega
                                    <span>R$ 3,50</span>
                                </ItemsTotal>
                                <TotalOrder>
                                    Total
                                    <strong>R$ {formattPriceTotal}</strong>
                                </TotalOrder>
                                <ConfirmButton type="submit" disabled={typePayment === ''}>confirmar pedido</ConfirmButton>
                            </>
                            ) : (
                                <> 
                                    <Title>Nenhum item no carrinho!</Title>
                                    <ConfirmButton 
                                        type="button"
                                        onClick={handleBackToHome}
                                    >
                                        Selecionar Cafés
                                    </ConfirmButton>
                                </>
                            )
                        }
                    </CalculatePrice>
                </ConfesCountContent>
            </CoffesCountContainer>
    )
}