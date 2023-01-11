import styled from "styled-components";

export const CoffeeContainer = styled.div`
    width: 16rem;
    height: 19.375rem;

    padding-inline: 1.5rem;
    padding-bottom: 1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${props => props.theme['base-card']};

    border-radius: 6px 36px 6px 36px;

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`

export const CoffeeImg = styled.div`
    margin-top: calc(0px - 1.5rem);

    margin-bottom: 0.75rem;
`

export const FeaturesCoffee = styled.div`
    display: flex;
    gap: 0.25rem;
`

export const FeatureCoffee = styled.span`
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;

    padding: 0.25rem 0.375rem;
    margin-bottom: 1rem;

    border-radius: 100px;
`

export const Title = styled.h3`
    color: ${props => props.theme['base-subtitle']};

    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.25rem;

    margin-bottom: 0.5rem;
`

export const Description = styled.p`
    color: ${props => props.theme['base-label']};
    font-size: 0.875rem;

    text-align: center;
`