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

export function Success() {
  return (
    <Container>
      <HeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que o café chegará até você</p>
      </HeaderContainer>

      <MainContent>
        <PurchaseInfosContainer>
          <PurchaseInfos>
            <InfoContent iconColor="#8047F8">
              <MapPin size={35} weight="fill" />
              <span>
                <p>
                  Entrega em <b>Rua João Daniel Martinelli, 102</b>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </span>
            </InfoContent>

            <InfoContent iconColor="#DBAC2C">
              <Timer size={35} weight="fill" />
              <span>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </span>
            </InfoContent>

            <InfoContent iconColor="#C47F17">
              <CurrencyDollar size={35} />
              <span>
                <p>Pagamento na entrega</p>
                <p>Cartão de crédito</p>
              </span>
            </InfoContent>
          </PurchaseInfos>
        </PurchaseInfosContainer>

        <img src={successImg} alt="success" />
      </MainContent>
    </Container>
  );
}
