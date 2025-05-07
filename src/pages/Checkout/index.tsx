import {
  AddressContent,
  CheckoutContainer,
  OrderContainer,
  PaymentContent,
  SelectedCoffeesContainer,
  HeaderContent,
  PaymentOptions,
  PaymentOption,
  CoffeeList,
  CoffeeItem,
} from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

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
          <form>
            <input type="text" placeholder="CEP" style={{ width: "35%" }} />
            <input type="text" placeholder="Rua" style={{ width: "100%" }} />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                type="text"
                placeholder="Número"
                style={{ width: "35%" }}
              />

              <input
                type="text"
                placeholder="Complemento"
                style={{ width: "64%" }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                type="text"
                placeholder="Bairro"
                style={{ width: "35%" }}
              />

              <input
                type="text"
                placeholder="Cidade"
                style={{ width: "53%" }}
              />

              <input type="text" placeholder="UF" style={{ width: "10%" }} />
            </div>
          </form>
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

          <PaymentOptions>
            <PaymentOption>
              <CreditCard size={32} />
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentOption>

            <PaymentOption>
              <Bank size={32} />
              <p>CARTÃO DE DÉBITO</p>
            </PaymentOption>
            <PaymentOption>
              <Money size={32} />
              <p>DINHEIRO</p>
            </PaymentOption>
          </PaymentOptions>
        </PaymentContent>
      </OrderContainer>

      <SelectedCoffeesContainer>
        <h1>Cafés selecionados</h1>

        <main>
          <CoffeeList>
            <CoffeeItem></CoffeeItem>
          </CoffeeList>
        </main>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  );
}
