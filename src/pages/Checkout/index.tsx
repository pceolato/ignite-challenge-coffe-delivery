import { CalculatePrice, CardOption, CheckoutFormContainer,
            CityInput,
            CityState,
            Coffes,
            CoffesCountContainer,
            ComplementInput,
            ComplementInputGroup,
            ConfesCountContent,
            ConfirmButton,
            DescriptionForm, 
            DescriptionOrder,
            DescriptionPayment,
            DistricCity,
            DistrictInput,
            FormContent,
            ItemsTotal,
            NumberComplement,
            NumberInput,
            OptionalPlaceholder,
            OrderContainer,
            PaymentContainer,
            PaymentOptions,
            StateInput,
            StreetInput,
            Title,
            TitleCardPayment,
            TitleOrder,
            TotalOrder,
            ZipCodeInput } from './styles';
import { useForm } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { CountCoffe } from './components/CountCoffe';
import { useContext, useEffect, useState } from 'react';
import { CoffeContext } from '../../contexts/CoffeContext';
import { useNavigate } from 'react-router-dom';

import cep from 'cep-promise'

export function Checkout() {
    const { cart, handleClearCart } = useContext(CoffeContext)
    const { register, handleSubmit, watch, setValue } = useForm()

    const [ typePayment, setTypePayment ] = useState('')

    const navigate = useNavigate();

    function handleBackToHome() {
        navigate('/')
    }
    
    function handleConfirmCart(data: any) {
        const checkoutData = {
            ...data,
            typePayment
        }
        localStorage.setItem('@coffe-delivery-success', JSON.stringify(checkoutData))
        handleClearCart()
        navigate('/order-success')
    }

    const zipCode = watch('zip-code')?.trim()
    
    register('zip-code', {
        onBlur: (e) => getZipCode()
    })

    async function getZipCode() {
        if(!!zipCode) {
            const res = await cep(zipCode)
    
            setValue('street', res.street)
            setValue('district', res.neighborhood)
            setValue('city', res.city)
            setValue('state', res.state)
        }
    }

    const totalPrice = cart?.map((order) => order.price * order.quantity)
    .reduce((to, from) => to + from, 0);

    const formattPrice = totalPrice.toLocaleString('pt-br',{minimumFractionDigits: 2})
    const formattPriceTotal = (totalPrice + 3.50).toLocaleString('pt-br',{minimumFractionDigits: 2})

    return (
        <CheckoutFormContainer onSubmit={handleSubmit(handleConfirmCart)}>
            <OrderContainer>
                <Title>Complete seu pedido</Title>
                <FormContent>
                    <DescriptionForm>
                        <MapPinLine size={22} color="#C47F17" />
                        <div>
                            <TitleOrder>Endereço de Entrega</TitleOrder>
                            <DescriptionOrder>Informe o endereço onde deseja receber seu pedido</DescriptionOrder>
                        </div>
                    </DescriptionForm>
                    <ZipCodeInput 
                        id="zip-code"
                        type="text"
                        placeholder="CEP"
                        required
                        {...register('zip-code')}
                    />
                    <StreetInput
                        id="street"
                        type="text"
                        placeholder="Rua"
                        required
                        {...register('street')}
                    />
                    <NumberComplement>
                        <NumberInput
                            id="number"
                            type="text"
                            placeholder="Número"
                            required
                            {...register('number')}
                        />
                        <ComplementInputGroup>
                            <ComplementInput
                                id="complement"
                                type="text"
                                placeholder="Complemento"
                                {...register('complement')}
                            />
                            <OptionalPlaceholder>Opcional</OptionalPlaceholder>
                        </ComplementInputGroup>
                    </NumberComplement>
                    <CityState>
                        <DistricCity>
                            <DistrictInput
                                id="district"
                                type="text"
                                placeholder="Bairro"
                                required
                                {...register('district')}
                            />  
                            <CityInput
                                id="city"
                                type="text"
                                placeholder="Cidade"
                                required
                                {...register('city')}
                            />
                        </DistricCity>
                        <StateInput
                            id="state"
                            type="text"
                            placeholder="UF"
                            required
                            {...register('state')}
                        />      
                    </CityState>
                </FormContent>
                <PaymentContainer>
                    <DescriptionPayment>
                        <CurrencyDollar size={22} color="#8047F8" />
                        <div>
                            <TitleOrder>Pagamento</TitleOrder>
                            <DescriptionOrder>
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </DescriptionOrder>
                        </div>
                    </DescriptionPayment>
                    <PaymentOptions>
                        <CardOption 
                            type="button"
                            onClick={() => setTypePayment('Cartão de crédito')}
                        >
                            <CreditCard size={16} color="#8047f8" />
                            <TitleCardPayment>Cartão de crédito</TitleCardPayment>
                        </CardOption>
                        <CardOption 
                            type="button"
                            onClick={() => setTypePayment('Cartão de débito')}    
                        >
                            <Bank size={16} color="#8047f8" />
                            <TitleCardPayment>Cartão de débito</TitleCardPayment>
                        </CardOption>
                        <CardOption
                            type="button"
                            onClick={() => setTypePayment('Dinheiro')}
                        >
                            <Money size={16} color="#8047f8" />
                            <TitleCardPayment>Dinheiro</TitleCardPayment>
                        </CardOption>
                    </PaymentOptions>
                </PaymentContainer>
            </OrderContainer>
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
        </CheckoutFormContainer>
    )
}