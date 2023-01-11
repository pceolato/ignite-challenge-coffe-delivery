import styled from "styled-components";

export const PurchaseCoffee = styled.div`
    margin-top: 2.0625rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Price = styled.strong`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;

    color: ${props => props.theme['base-text']};

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
    }
`

export const CartContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const Amount = styled.div`
    width: 4.5rem;
    background: ${props => props.theme['base-button']};

    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.7rem 0.5rem;
`

const BaseButton = styled.button`
    cursor: pointer;

    border: none;
    line-height: normal;

    background: transparent;
`

export const MinusButton = styled(BaseButton)``
export const PlusButton = styled(BaseButton)``

export const CartButton = styled.button`
    display: flex;
    background: ${(props) => props.theme['purple-dark']};
    padding: 0.625rem;

    border: none;
    border-radius: 6px;

    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme.purple};
    }
`