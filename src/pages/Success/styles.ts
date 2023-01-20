import styled from "styled-components";

export const SuccessContainer = styled.div`
    width: 90%;
    max-width: 70rem;

    padding-top: 5rem;

    margin: 0 auto;
`

export const TitleSuccess = styled.h1`
    color: ${props => props.theme['yellow-dark']};

    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
`

export const SubtitleSuccess = styled.p`
    color: ${props => props.theme['base-subtitle']};

    font-size: 1.25rem;
`

export const SuccessContent = styled.div`
    display: flex;
    gap: 6.375rem;

`
export const CardSummary = styled.div`
    width: 100%;
    background: linear-gradient(to right, #DBAC2C,#8047F8);
    padding: 1px;
    border-radius: 6px 36px;

    margin-top: 2.5rem;
`

export const OrderSuccessContent = styled.div`
    width: 1005;
    background: #fff;
    padding: 2.5rem;
    border-radius: 6px 36px;

    display: grid;
    gap: 2rem;
`

export const ItemInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

interface AvatarProps {
    avatarColor: 'yellow-dark' | 'purple' | 'yellow';
}

export const Avatar = styled.div<AvatarProps>`
    background: ${(props) => props.theme[props.avatarColor]};
    width: 32px;
    height: 32px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const DeliveryInformation = styled.div`
    color: ${props => props.theme['base-text']};
`

export const Span = styled.span`
    display: block;
    color: ${props => props.theme['base-text']};
`

export const ImageSucces = styled.div`
    @media (max-width: 1020px) {
        display: none;
    }
`
