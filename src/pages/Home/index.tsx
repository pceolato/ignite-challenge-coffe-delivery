import { useContext } from 'react'
import img from '../../assets/intro-image.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { CardCoffee } from './components/CardCoffee'
import { Feature } from './components/Feature'
import { CoffeesContainer, CoffeesContent, Features, InfosContent, IntroContainer, IntroContent, Subtitle, Title, TitleCoffees } from './styles'

export function Home() {
    const { coffees } = useContext(CoffeeContext)

    return (
        <>
            <IntroContainer>
                <IntroContent>
                    <InfosContent>
                        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                        <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a
                            qualquer hora</Subtitle>
                        <Features>
                            <Feature content='Compra simples e segura' avatarColor='yellow-dark' />
                            <Feature content='Embalagem mantém o café intacto' avatarColor='base-text' />
                            <Feature content='Entrega rápida e rastreada' avatarColor='yellow' />
                            <Feature content='O café chega fresquinho até você' avatarColor='purple' />
                        </Features>
                    </InfosContent>
                    <img src={img} alt="" />
                </IntroContent>
            </IntroContainer>
            <CoffeesContainer>
                <TitleCoffees>
                    Nossos cafés
                </TitleCoffees>
                <CoffeesContent>
                    {
                        coffees.map(coffee => (
                            <CardCoffee
                                key={coffee.id}
                                id={coffee.id}
                                title={coffee.title}
                                description={coffee.description}
                                features={coffee.features}
                                image={coffee.image}
                                price={coffee.price}
                            />
                        ))
                    }
                </CoffeesContent>
            </CoffeesContainer>
        </>
    )
}