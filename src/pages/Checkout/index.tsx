import {
  AddressContent,
  CheckoutContainer,
  OrderContainer,
  PaymentContent,
  SelectedCoffeesContainer,
  HeaderContent,
} from "./styles";
import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <h1>Complete seu pedido</h1>
        <AddressContent>
          <HeaderContent>
            <MapPinLine size={32} />
            <span>
              <h2>Endereço de Entrega</h2>
              <h3>Informe o endereço onde deseja receber seu pedido</h3>
            </span>
          </HeaderContent>
        </AddressContent>
        <PaymentContent>
          <HeaderContent>
            <CurrencyDollar size={32} />
            <span>
              <h2>Pagamento</h2>
              <h3>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h3>
            </span>
          </HeaderContent>
        </PaymentContent>
      </OrderContainer>

      <SelectedCoffeesContainer>
        <h1>Cafés selecionados</h1>

        <main>
          <ul>
            <li></li>
            <li></li>
          </ul>

          <section></section>
        </main>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  );
}
