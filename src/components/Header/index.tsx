import {
  CartButton,
  HeaderContainer,
  LogoContent,
  LocationButton,
  RightContent,
  NewOrderButton,
} from "./styles";
import logo from "../../assets/logo.svg";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useCoffeeShop } from "../../contexts/CoffeeShopContext";

export function Header() {
  const navigate = useNavigate();
  const { selectedCoffees, purchaseData, newOrder, purchasesHistory } =
    useCoffeeShop();

  const totalItems = selectedCoffees.reduce(
    (currentTotalItems, { quantity }) => {
      return (currentTotalItems += quantity);
    },
    0
  );

  function handleNewOrder() {
    purchaseData && newOrder(purchaseData);
    navigate("/");
  }

  return (
    <HeaderContainer>
      <button
        style={{ all: "unset", cursor: "pointer" }}
        onClick={() => navigate("/")}
        disabled={!!purchaseData}
      >
        <LogoContent alt="" src={logo} />
      </button>

      <RightContent>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Recife, PE
        </LocationButton>

        {purchaseData ? (
          <NewOrderButton onClick={handleNewOrder}>NOVO PEDIDO</NewOrderButton>
        ) : (
          <CartButton type="button" onClick={() => navigate("/checkout")}>
            {totalItems > 0 && <span>{totalItems}</span>}
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        )}
      </RightContent>
    </HeaderContainer>
  );
}
