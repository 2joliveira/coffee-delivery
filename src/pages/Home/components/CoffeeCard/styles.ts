import styled from "styled-components";

export const CoffeeContainer = styled.li`
  width: 256px;
  height: 310px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 10px 30px 10px 30px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -40px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: larger;
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors["base-label"]};
  }

  @media (max-width: 670px) {
    width: 100%;
    padding: 30px;

    img {
      margin-top: -55px;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 5px;

  span {
    text-align: center;
    font-size: x-small;
    font-weight: 600;
    padding: 0 7px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const CounterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PriceContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  gap: 5px;

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
    display: flex;
  }

  p:first-child {
    font-size: x-small;
    align-items: center;
    padding-top: 7px;
  }

  p:last-child {
    font-family: "Baloo 2";
    font-size: x-large;
    font-weight: 600;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  gap: 5px;
`;

export const CounterActions = styled.div`
  height: 40px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  gap: 3px;
  text-align: center;

  p {
    min-width: 28px;
  }
`;

export const CounterButton = styled.button`
  min-width: 28px;
  min-height: 38px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors["purple"]};
  box-shadow: 0 0 transparent;
  border-radius: 6px;

  &:hover {
    color: ${({ theme }) => theme.colors["purple-dark"]};
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["purple-dark"]};
  }
`;

export const CartButton = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["purple-dark"]};
  color: ${({ theme }) => theme.colors["base-card"]};
  cursor: pointer;
  box-shadow: 0 0 transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors["purple"]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["purple-dark"]};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h3 {
    font-family: "Baloo 2";
    font-size: 1.5rem;
  }

  .textModal {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    margin-bottom: 20px;
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors["base-text"]};

  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["purple-dark"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }
`;

export const GoToCartButton = styled(ModalButton)`
  background-color: ${({ theme }) => theme.colors["yellow"]};
  color: ${({ theme }) => theme.colors["white"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const CancelButton = styled(ModalButton)`
  color: ${({ theme }) => theme.colors["white"]};
  background-color: ${({ theme }) => theme.colors["red"]};

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["red"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["red-dark"]};
  }
`;

export const CoffeeContentModal = styled(ModalContainer)`
  margin-bottom: 20px;
`;

export const AmountText = styled.p`
  font-family: "Baloo 2";
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["base-text"]};
`;
