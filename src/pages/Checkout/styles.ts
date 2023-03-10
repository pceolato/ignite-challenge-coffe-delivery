import styled from "styled-components";

export const CheckoutFormContainer = styled.form`
    width: 90%;
    max-width: 70rem;

    margin: 0 auto;

    display: flex;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`

export const OrderContainer = styled.div`
    width: 90%;
    max-width: 40rem;


    gap: 0.75rem;

    @media (max-width: 750px) {
        width: 100%;
    }
`
export const Title = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: bold;

    color: ${props => props.theme['base-subtitle']};

    margin-bottom: 1rem;
`
export const TitleOrder = styled.h4`
   font-weight: 400;
   color: ${props => props.theme['base-subtitle']};
`

export const DescriptionOrder = styled.span`
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
`

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px;

    padding: 2.5rem;
`

export const DescriptionPayment = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`

export const PaymentOptions = styled.div`
    display: flex;
    gap: 0.75rem;


    @media (max-width: 750px) {
       flex-direction: column;
    }
`

export const CardOption = styled.button`
    padding: 1rem;
    background: ${props => props.theme['base-button']};
    border-radius: 6px;

    cursor: pointer;
    border: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:hover {
        background: ${props => props.theme['base-hover']};
    }

    &:focus {
        background: ${props => props.theme['purple-light']};
        border: 1px solid ${props => props.theme.purple}
    }
`

export const TitleCardPayment = styled.span`
    text-transform: uppercase;

    color: ${props => props.theme['base-text']};
    font-size: 0.75rem;
`

export const CoffeesCountContainer = styled.div``

export const ConfesCountContent = styled.div`
    background: ${props => props.theme['base-card']};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;

    border-radius: 6px 44px 6px 44px;
`

export const Coffees = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const CalculatePrice = styled.div`
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const ItemsTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${props => props.theme['base-text']};

    font-size: 0.875rem;

    span {
        font-size: 1rem;
    }
`
export const TotalOrder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.25rem;
    font-weight: bold;

    color: ${props => props.theme['base-subtitle']};
`

export const ConfirmButton = styled.button`
    margin-top: 0.75rem;
    cursor: pointer;

    text-transform: uppercase;

    border: none;
    border-radius: 6px;

    color: ${props => props.theme.white};
    background: ${props => props.theme.yellow};
    font-weight: bold;

    width: 100%;
    padding: 0.75rem;

    &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${props => props.theme['yellow-dark']};
    }
`