import {
  CartButton,
  HeaderContainer,
  LogoContent,
  LocationButton,
  RightContent,
} from "./styles";
import logo from "../../assets/logo.svg";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useCoffeeShop } from "../../contexts/CoffeeShopContext";

export function Header() {
  const navigate = useNavigate();
  const { selectedCoffees } = useCoffeeShop();

  const totalItems = selectedCoffees.reduce(
    (currentTotalItems, { quantity }) => {
      return (currentTotalItems += quantity);
    },
    0
  );

  return (
    <HeaderContainer>
      <button
        style={{ all: "unset", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <LogoContent alt="" src={logo} />
      </button>

      <RightContent>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Recife, PE
        </LocationButton>

        <CartButton type="button" onClick={() => navigate("/checkout")}>
          {totalItems > 0 && <span>{totalItems}</span>}
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </RightContent>
    </HeaderContainer>
  );
}
