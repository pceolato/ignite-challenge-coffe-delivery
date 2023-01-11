import styled from "styled-components";
import { Minus, Plus} from "phosphor-react";

export const CoffeContent = styled.div`
    display: flex;
    gap: 1.25rem;

    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};
`

export const ImageCoffe = styled.img`
    width: 64px;
    height: 64px;
`

export const TitleCoffe = styled.h5`
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
`

export const CoffeDescription = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 3.125rem;
`

export const PriceCoffeTotal = styled.strong`
    font-weight: bold;
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const Amount = styled.div`
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem;

    background: ${props => props.theme['base-button']};

    border-radius: 6px;
    
`

const BaseButton = styled.button`
    cursor: pointer;

    border: none;
    line-height: normal;

    background: transparent;
    cursor: pointer;
`

export const MinusButton = styled(BaseButton)``

export const PlusButton = styled(BaseButton)``

export const RemoveButton = styled.button`
    height: 2rem;
    padding: 0.5rem;

    cursor: pointer;

    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};

    border: none;
    border-radius: 6px;
    
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;

    &:hover {
        background: ${props => props.theme['base-hover']};
    }
`

export const StyledMinus = styled(Minus)`
  color: ${props => props.theme.purple};
  &:hover {
    color:  ${props => props.theme['purple-dark']};
  }
`;

export const StyledPlus = styled(Plus)`
  color: ${props => props.theme.purple};
  &:hover {
    color:  ${props => props.theme['purple-dark']};
  }
`;