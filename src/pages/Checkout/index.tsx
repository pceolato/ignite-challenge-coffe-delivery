import {    CardOption,
            CheckoutFormContainer,
            DescriptionOrder,
            DescriptionPayment,
            OrderContainer,
            PaymentContainer,
            PaymentOptions,
            Title,
            TitleCardPayment,
            TitleOrder } from './styles';
import { useForm, FormProvider } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CoffeContext } from '../../contexts/CoffeContext';
import { useNavigate } from 'react-router-dom';

import cep from 'cep-promise'
import { FormCheckout } from './components/FormCheckout';
import { SelectedCoffes } from './components/SelectedCoffes';

export function Checkout() {
    const { handleClearCart } = useContext(CoffeContext)

    const newCheckoutForm = useForm()
    const { register, handleSubmit, watch, setValue } = newCheckoutForm

    const [ typePayment, setTypePayment ] = useState('')

    const navigate = useNavigate();
    
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

    return (
        <CheckoutFormContainer onSubmit={handleSubmit(handleConfirmCart)}>
            <OrderContainer>
                <Title>Complete seu pedido</Title>
                <FormProvider {...newCheckoutForm}>
                    <FormCheckout />
                </FormProvider>
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
            <FormProvider {...newCheckoutForm}>
                <SelectedCoffes typePayment={typePayment} />
            </FormProvider>
        </CheckoutFormContainer>
    )
}