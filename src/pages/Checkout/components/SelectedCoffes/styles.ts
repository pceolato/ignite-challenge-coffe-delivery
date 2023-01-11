import styled from "styled-components"

export const CoffesCountContainer = styled.div``

export const ConfesCountContent = styled.div`
    background: ${props => props.theme['base-card']};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;

    border-radius: 6px 44px 6px 44px;
`

export const Title = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: bold;

    color: ${props => props.theme['base-subtitle']};

    margin-bottom: 1rem;
`

export const Coffes = styled.div`
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