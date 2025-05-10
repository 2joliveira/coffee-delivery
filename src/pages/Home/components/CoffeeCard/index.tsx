import { useCoffeeShop } from "../../../../hooks/coffeeShop";
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

export function CoffeeCard(coffee: CoffeeProps) {
  const {
    id,
    name,
    imagePath,
    description,
    price,
    ingredients,
    quantity,
  } = coffee;
  const { addToCart, removeFromCart } = useCoffeeShop();
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
          <span key={ingredient}>{ingredient}</span>
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
              onClick={() => removeFromCart(id)}
            >
              <Minus size={17} />
            </CounterButton>
            <p>{quantity}</p>
            <CounterButton
              type="button"
              onClick={() => addToCart(id)}
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
