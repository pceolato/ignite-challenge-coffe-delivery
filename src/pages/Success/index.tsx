import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import imageSuccess from '../../assets/Illustration-success.svg'
import { Avatar, DeliveryInformation, Div, ItemInformation, OrderSuccessContent, Span, SubtitleSuccess, SuccessContainer, SuccessContent, TitleSuccess } from './styles'

interface dataSuccessType {
    street: string,
    number: string,
    complement?: string;
    district: string,
    city: string,
    state: string,
    typePayment: string,
}

export function Succces() {
    const [dataSuccess, setDataSuccess] = useState<dataSuccessType>({} as dataSuccessType)
    useEffect(() => {
        const storage = localStorage.getItem('@coffe-delivery-success')

        if(storage !== null) {
            const json = JSON.parse(storage)

            setDataSuccess({
                street: json.street,
                number: json.number,
                complement: json.complement,
                district: json.district,
                city: json.city,
                state: json.state,
                typePayment: json.typePayment
            })
        }
    }, [])
    return (
        <SuccessContainer>
            <TitleSuccess>Uhu! Pedido confirmado</TitleSuccess>
            <SubtitleSuccess>Agora é só aguardar que logo o café chegará até você</SubtitleSuccess>
            <SuccessContent>  
                <Div>
                    <OrderSuccessContent>
                        <ItemInformation>
                            <Avatar avatarColor='purple'>
                                <MapPin size={16} color="#FAFAFA" weight="fill" />
                            </Avatar>
                            <DeliveryInformation>
                                <span>Entrega em <strong>{dataSuccess.street}, {dataSuccess.number}{!!dataSuccess.complement && ` - ${dataSuccess.complement}`}</strong></span>
                                <Span>{dataSuccess.district} - {dataSuccess.city}, {dataSuccess.state}</Span>
                            </DeliveryInformation>
                        </ItemInformation>
                        <ItemInformation>
                            <Avatar avatarColor='yellow'>
                                <Timer size={16} color="#fafafa" weight="fill" />
                            </Avatar>
                            <DeliveryInformation>
                                <Span>Previsão de entrega</Span>
                                <strong>20 min - 30 min</strong>
                            </DeliveryInformation>
                        </ItemInformation>
                        <ItemInformation>
                            <Avatar avatarColor='yellow-dark'>
                                <CurrencyDollar size={16} color="#fafafa" />
                            </Avatar>
                            <DeliveryInformation>
                                <Span>Pagamento na entrega</Span>
                                <strong>{dataSuccess.typePayment}</strong>
                            </DeliveryInformation>
                        </ItemInformation>
                    </OrderSuccessContent>
                </Div>  
                <div>
                    <img src={imageSuccess} alt="" />
                </div>
            </SuccessContent>
        </SuccessContainer>
    )
}
