import { CoffeeContainer, CoffeeImg, Description, FeatureCoffee, FeaturesCoffee, Title } from './styles';

import { AmountCart } from '../AmountCart';

interface CardCoffeeProps {
    id: string;
    image: string;
    features: string[];
    title: string;
    description: string;
    price: number;
}

export function CardCoffee({id, image, features, title, description, price}: CardCoffeeProps) {
    return (
        <CoffeeContainer>
            <CoffeeImg>
                <img src={`/coffees/${image}.svg`} alt="" />
            </CoffeeImg>
            <FeaturesCoffee>
            {
                features?.map((feature, index) => (
                    <FeatureCoffee key={index}>
                        {feature}
                    </FeatureCoffee>
                ))
            }
            </FeaturesCoffee>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
            <AmountCart id={id} price={price}/>
        </CoffeeContainer>
    )
}