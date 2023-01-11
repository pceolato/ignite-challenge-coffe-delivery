import { MapPinLine } from "phosphor-react"
import { useFormContext } from "react-hook-form"
import { CityInput, CityState, ComplementInput, ComplementInputGroup, DescriptionForm, DescriptionOrder, DistricCity, DistrictInput, FormContent, NumberComplement, NumberInput, OptionalPlaceholder, StateInput, StreetInput, TitleOrder, ZipCodeInput } from "./styles"

export function FormCheckout() {
    const { register } = useFormContext()

    return (
        <FormContent>
            <DescriptionForm>
                <MapPinLine size={22} color="#C47F17" />
                <div>
                    <TitleOrder>Endereço de Entrega</TitleOrder>
                    <DescriptionOrder>Informe o endereço onde deseja receber seu pedido</DescriptionOrder>
                </div>
            </DescriptionForm>
            <ZipCodeInput
                id="zip-code"
                type="text"
                placeholder="CEP"
                required
                {...register('zip-code')}
            />
            <StreetInput
                id="street"
                type="text"
                placeholder="Rua"
                required
                {...register('street')}
            />
            <NumberComplement>
                <NumberInput
                    id="number"
                    type="text"
                    placeholder="Número"
                    required
                    {...register('number')}
                />
                <ComplementInputGroup>
                    <ComplementInput
                        id="complement"
                        type="text"
                        placeholder="Complemento"
                        {...register('complement')}
                    />
                    <OptionalPlaceholder>Opcional</OptionalPlaceholder>
                </ComplementInputGroup>
            </NumberComplement>
            <CityState>
                <DistricCity>
                    <DistrictInput
                        id="district"
                        type="text"
                        placeholder="Bairro"
                        required
                        {...register('district')}
                    />
                    <CityInput
                        id="city"
                        type="text"
                        placeholder="Cidade"
                        required
                        {...register('city')}
                    />
                </DistricCity>
                <StateInput
                    id="state"
                    type="text"
                    placeholder="UF"
                    required
                    {...register('state')}
                />
            </CityState>
        </FormContent>
    )
}