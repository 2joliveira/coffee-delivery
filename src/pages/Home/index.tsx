import {
  Timer,
  Coffee,
  Package,
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";

import {
  Description,
  HomeContainer,
  HomeContent,
  ImageContainer,
  ImageContent,
  Info,
  InfosContainer,
  ProductsList,
  ProductsListContainer,
} from "./styles";

import home from "@/assets/home.png";

import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeProps } from "./interface";
import { useCoffeeShop } from "../../hooks/coffeeShop";

export function Home() {
  const { coffees } = useCoffeeShop()
  return (
    <HomeContainer>
      <HomeContent>
        <Description>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <InfosContainer>
            <Info color="yellow-dark">
              <ShoppingCart size={36} weight="fill" />
              Compra simples e segura
            </Info>
            <Info color="base-text">
              <Timer size={36} weight="fill" />
              Entrega rápida e rastreada
            </Info>
            <Info color="yellow">
              <Package size={36} weight="fill" />
              Embalagem mantém o café intacto
            </Info>
            <Info color="purple">
              <Coffee size={36} weight="fill" />O café chega fresquinho até você
            </Info>
          </InfosContainer>
        </Description>
        <ImageContainer>
          <ImageContent src={home} alt="" />
        </ImageContainer>
      </HomeContent>
      <ProductsListContainer>
        <h2>Nossos cafés</h2>
        <ProductsList>
          {coffees.map((coffee: CoffeeProps) => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </ProductsList>
      </ProductsListContainer>
    </HomeContainer>
  );
}
