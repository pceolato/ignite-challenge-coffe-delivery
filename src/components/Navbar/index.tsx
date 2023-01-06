import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeContext } from '../../contexts/CoffeContext'
import { CartButton, CountCart, Location, NavbarContainer, NavbarContent, TextLocation } from './styles'
import logo from '/Logo.svg'

export function Navbar() {
    const { cart } = useContext(CoffeContext)
    const navigate = useNavigate();

    function handleCheckoutNavigate() {
        navigate('/checkout')
    }

    function handleHomeNavigate() {
        navigate('/')
    }

    return (
        <NavbarContainer>
            <img src={logo} alt="" onClick={handleHomeNavigate}/>
            <NavbarContent>
                <Location>
                    <MapPin size={24} color="#8047f8" weight="fill" />
                    <TextLocation>
                        Porto Alegre, RS
                    </TextLocation>
                </Location>

                <CartButton onClick={handleCheckoutNavigate}>
                    {
                        cart?.length > 0 && (
                            <CountCart>
                                {cart.length}
                            </CountCart>
                        )
                    }
                    <ShoppingCart size={24} color="#C47F17" weight="fill" />
                </CartButton>
            </NavbarContent>
        </NavbarContainer>
    )
}