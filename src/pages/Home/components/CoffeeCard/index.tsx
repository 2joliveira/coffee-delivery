import { useState } from "react";
import { CoffeeProps } from "../../interface";
import {
  ButtonsContainer,
  CartButton,
  CoffeeContainer,
  CounterActions,
  CounterButton,
  CounterContainer,
  PriceContent,
  TagsContainer,
} from "./styles";
import { ShoppingCart, Plus, Minus } from "@phosphor-icons/react";

export function CoffeeCard({
  name,
  imagePath,
  description,
  price,
  ingredients,
}: CoffeeProps) {
  const [quantity, setQuantity] = useState(0);

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <CoffeeContainer>
      <img src={imagePath} alt="" />
      <TagsContainer>
        {ingredients.map((ingredient) => (
          <span>{ingredient}</span>
        ))}
      </TagsContainer>

      <h2>{name}</h2>

      <p>{description}</p>

      <CounterContainer>
        <PriceContent>
          <p>R$</p>
          <p>{formattedPrice}</p>
        </PriceContent>
        <ButtonsContainer>
          <CounterActions>
            <CounterButton
              type="button"
              onClick={() => quantity > 0 && setQuantity(quantity - 1)}
            >
              <Minus size={17} />
            </CounterButton>
            <p>{quantity}</p>
            <CounterButton
              type="button"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus size={17} />
            </CounterButton>
          </CounterActions>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </ButtonsContainer>
      </CounterContainer>
    </CoffeeContainer>
  );
}
