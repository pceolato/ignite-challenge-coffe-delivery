import styled from "styled-components";

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px;

    padding: 2.5rem;

    margin-bottom: 0.75rem;
`

export const DescriptionForm = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

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

const baseInput = styled.input`
    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};

    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;

    font-size: 0.875rem;

    &::placeholder {
        color: ${props => props.theme['base-label']};
    }

    &:focus {
        border: 1px solid ${props => props.theme['yellow-dark']};
    }

`

export const ZipCodeInput = styled(baseInput)`
    width: 12.5rem;
`

export const StreetInput = styled(baseInput)``

export const NumberComplement = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.75rem;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

export const NumberInput = styled(baseInput)``

export const ComplementInputGroup = styled.div`
    display: flex;

    &:focus {
        border: 1px solid ${props => props.theme['yellow-dark']};
    }
`

export const ComplementInput = styled(baseInput)`
    flex: 1;
    border-right: 0;
    border-radius: 4px 0 0 4px;
`
export const OptionalPlaceholder = styled.div`
    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-label']};

    display: flex;
    align-items: center;
    
    border: 1px solid ${props => props.theme['base-button']};
    border-left: 0;
    border-radius: 0 4px 4px 0;
    
    padding: 0.75rem;

    font-size: 0.75rem;
    font-style: italic;
`

export const CityState = styled.div`
    display: flex;
    gap: 0.75rem;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`

export const DistricCity = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.75rem;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

export const DistrictInput = styled(baseInput)``

export const CityInput = styled(baseInput)``

export const StateInput = styled(baseInput)`
    width: 3.75rem;
`