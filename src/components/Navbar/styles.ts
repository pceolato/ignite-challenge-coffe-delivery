import styled from "styled-components";

export const NavbarContainer = styled.div`
    max-width: 70rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: auto;

    padding: 2rem 0;

    @media (max-width: 768px) {
        padding-inline: 1rem;
    }
`

export const NavbarContent = styled.div`
    display: flex;
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background: ${(props) => props.theme['purple-light']};

    border-radius: 6px;

    padding: 0.5rem;

`
export const TextLocation = styled.p`
    color: ${(props) => props.theme['purple-dark']};
        font-size: 0.875rem;
`

export const CartButton = styled.button`
    display: flex;
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.625rem;

    border: none;
    border-radius: 6px;

    cursor: pointer;

    margin-left: 0.75rem;
    position: relative;
`

export const CountCart = styled.div`
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;

    background: ${props => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    font-size: 0.75rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;

    top: calc(0px - 0.5rem);
    right: calc(0px - 0.5rem);
`