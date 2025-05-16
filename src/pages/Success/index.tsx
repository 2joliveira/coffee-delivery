import {
  Container,
  HeaderContainer,
  InfoContent,
  MainContent,
  PurchaseInfos,
  PurchaseInfosContainer,
} from "./styles";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

import successImg from "@/assets/success.png";
import { useCoffeeShop } from "../../contexts/CoffeeShopContext";

export function Success() {
  const { purchaseData } = useCoffeeShop();

  if (!purchaseData) return null;

  const { street, number, district, city, uf, paymentMethod } = purchaseData;

  const PAYMENT_METHOD: any = {
    money: "Dinheiro",
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que o café chegará até você</p>
      </HeaderContainer>

      <MainContent>
        <PurchaseInfosContainer>
          <PurchaseInfos>
            <InfoContent iconcolor="#8047F8">
              <MapPin size={35} weight="fill" />
              <span>
                <p>
                  Entrega em <b>{`Rua ${street}, ${number}`}</b>
                </p>
                <p>{`${district} - ${city}, ${uf}`}</p>
              </span>
            </InfoContent>

            <InfoContent iconcolor="#DBAC2C">
              <Timer size={35} weight="fill" />
              <span>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </span>
            </InfoContent>

            <InfoContent iconcolor="#C47F17">
              <CurrencyDollar size={35} />
              <span>
                <p>Pagamento na entrega</p>
                <p>{PAYMENT_METHOD[paymentMethod]}</p>
              </span>
            </InfoContent>
          </PurchaseInfos>
        </PurchaseInfosContainer>

        <img src={successImg} alt="success" />
      </MainContent>
    </Container>
  );
}
