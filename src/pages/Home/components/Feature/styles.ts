import styled from "styled-components";

export const FeatureContent = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
`
export const Description = styled.p`
    color: ${props => props.theme['base-text']}
`

interface AvatarProps {
    avatarColor: 'yellow-dark' | 'purple' | 'yellow' | 'base-text';
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