import {
  CartButton,
  HeaderContainer,
  LogoContent,
  LocationButton,
  RightContent,
} from "./styles";
import logo from "../../assets/logo.svg";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContent alt="" src={logo} />

      <RightContent>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Recife, PE
        </LocationButton>

        <CartButton type="button">
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </RightContent>
    </HeaderContainer>
  );
}
