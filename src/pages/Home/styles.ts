import styled from "styled-components";
import backgroundImage from '../../assets/intro-background.svg'


export const IntroContainer = styled.div`
  width: 100%;
  padding: 5.75rem 0;
  
  background: url(${backgroundImage});
  `

export const IntroContent = styled.div`
    max-width: 70rem;
    display: flex;
    justify-content: space-between;
    
    margin: 0 auto;

    @media (max-width: 768px) {
        padding-inline: 1rem;
    }
    
    
    img {
        @media (max-width: 768px) {
            display: none;
        }
    }
    `

export const InfosContent = styled.div`
    width: 588px;

`

export const Title = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    
    color: ${props => props.theme['base-title']};
    
    padding-bottom: 1rem;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const Features = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    
    padding-top: 4.125rem;
`

export const CoffesContainer = styled.div`
    margin: 0 auto;
    max-width: 70rem;

    @media (max-width: 768px) {
        padding-inline: 1rem;
    }
`
export const CoffesContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    margin-top: 2.125rem;
    
    `

export const TitleCoffes = styled.h2`
    color: ${props => props.theme['base-subtitle']};
    
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;

    @media (max-width: 768px) {
        text-align: center;
    }
`