import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartButton, Location, NavbarContainer, NavbarContent, TextLocation } from './styles'
import logo from '/Logo.svg'

export function Navbar() {
    return (
        <NavbarContainer>
            <img src={logo} alt="" />
            <NavbarContent>
                <Location>
                    <MapPin size={24} color="#8047f8" weight="fill" />
                    <TextLocation>
                        Porto Alegre, RS
                    </TextLocation>
                </Location>

                <CartButton>
                    <ShoppingCart size={24} color="#C47F17" weight="fill" />
                </CartButton>
            </NavbarContent>
        </NavbarContainer>
    )
}