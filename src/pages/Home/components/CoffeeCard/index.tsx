import { useState } from "react";
import { CoffeeProps } from "../../../../reducers/coffeesShop/reducer";
import Modal from "react-modal";
import {
  ButtonsContainer,
  CartButton,
  CoffeeContainer,
  CounterActions,
  CounterButton,
  CounterContainer,
  PriceContent,
  TagsContainer,
  ModalContainer,
  CoffeeContentModal,
  AmountText,
  ModalButton,
  GoToCartButton,
  CancelButton,
} from "./styles";
import { ShoppingCart, Plus, Minus } from "@phosphor-icons/react";
import { useCoffeeShop } from "../../../../contexts/CoffeeShopContext";
import { useNavigate } from "react-router-dom";

const modalCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    minWidth: "300px",
  },
};

export function CoffeeCard(coffee: CoffeeProps) {
  const { id, name, imagePath, description, price, ingredients } = coffee;
  const { addToCart } = useCoffeeShop();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleContinueShopping() {
    if (quantity > 0) {
      addToCart(id, { ...coffee, quantity });
      setQuantity(0);
    }
    closeModal();
  }

  function handleContinueToCart() {
    handleContinueShopping();
    navigate("/checkout");
  }

  function handleCancel() {
    setQuantity(0);
    closeModal();
  }

  const HandleActionButtons = () => {
    return (
      <CounterActions>
        <CounterButton
          type="button"
          onClick={() => quantity > 0 && setQuantity(quantity - 1)}
        >
          <Minus size={17} weight="bold" />
        </CounterButton>
        <p>{quantity}</p>
        <CounterButton type="button" onClick={() => setQuantity(quantity + 1)}>
          <Plus size={17} weight="bold" />
        </CounterButton>
      </CounterActions>
    );
  };

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
          <p>
            {price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </PriceContent>
        <ButtonsContainer>
          <HandleActionButtons />
          <CartButton>
            <ShoppingCart size={22} weight="fill" onClick={openModal} />
          </CartButton>
        </ButtonsContainer>
      </CounterContainer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalCustomStyles}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <ModalContainer>
          <CoffeeContentModal>
            <img src={imagePath} alt="" />

            <h3>{name}</h3>
            <p className="textModal">{description}</p>

            <HandleActionButtons />
          </CoffeeContentModal>

          <AmountText>
            {(price * quantity).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </AmountText>

          <ModalButton onClick={handleContinueShopping}>
            Continuar Comprando
          </ModalButton>

          <GoToCartButton onClick={handleContinueToCart}>
            <ShoppingCart size={22} weight="fill" />
            Ir para o carrinho
          </GoToCartButton>

          <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
        </ModalContainer>
      </Modal>
    </CoffeeContainer>
  );
}
