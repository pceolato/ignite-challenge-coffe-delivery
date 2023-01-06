import { CoffeContainer, CoffeImg, Description, FeatureCoffe, FeaturesCoffe, Title } from './styles';

// import CoffeExpresso from '../../../../assets/coffes/expresso.svg';
import { AmountCart } from '../AmountCart';
import { CoffeContext } from '../../../../contexts/CoffeContext';
import { useContext } from 'react';

interface CardCoffeProps {
    id: string;
    image: string;
    features?: string[];
    title: string;
    description: string;
}

export function CardCoffe({id, image, features, title, description}: CardCoffeProps) {
    return (
        <CoffeContainer>
            <CoffeImg>
                <img src={`/coffes/${image}.svg`} alt="" />
            </CoffeImg>
            <FeaturesCoffe>
            {
                features?.map((feature, index) => (
                    <FeatureCoffe key={index}>
                        {feature}
                    </FeatureCoffe>
                ))
            }
            </FeaturesCoffe>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
            <AmountCart id={id} />
        </CoffeContainer>
    )
}