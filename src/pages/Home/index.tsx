import { useContext } from 'react'
import img from '../../assets/intro-image.svg'
import { CoffeContext } from '../../contexts/CoffeContext'
import { CardCoffe } from './components/CardCoffe'
import { Feature } from './components/Feature'
import { CoffesContainer, CoffesContent, Features, InfosContent, IntroContainer, IntroContent, Subtitle, Title, TitleCoffes } from './styles'

export function Home() {
    const { coffes } = useContext(CoffeContext)
    console.log(coffes)

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
            <CoffesContainer>
                <TitleCoffes>
                    Nossos cafés
                </TitleCoffes>
                <CoffesContent>
                    {
                        coffes.map(coffe => (
                            <CardCoffe
                                key={coffe.title}
                                title={coffe.title}
                                description={coffe.description}
                                features={coffe.features}
                                image={coffe.image}
                            />
                        ))
                    }
                </CoffesContent>
            </CoffesContainer>
        </>
    )
}