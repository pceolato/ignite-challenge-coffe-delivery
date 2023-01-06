import { CoffeContainer, CoffeImg, Description, FeatureCoffe, FeaturesCoffe, Title } from './styles';

// import CoffeExpresso from '../../../../assets/coffes/expresso.svg';
import { AmountCart } from '../AmountCart';

interface CardCoffeProps {
    image: string;
    features?: string[];
    title: string;
    description: string;
}

export function CardCoffe({image, features, title, description}: CardCoffeProps) {
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
            <AmountCart />
        </CoffeContainer>
    )
}