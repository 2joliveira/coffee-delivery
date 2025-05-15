import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 6%;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;

  h1 {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  @media (max-width: 1320px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const OrderContainer = styled.div`
  height: 100%;
  width: 60%;

  @media (max-width: 1600px) {
    width: 55%;
  }

  @media (max-width: 1320px) {
    width: 100%;
  }
`;

export const SelectedCoffeesContainer = styled.div`
  height: 100%;
  width: 35%;

  main {
    margin-top: 20px;
    padding: 50px 30px;
    background-color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 10px 50px 10px 50px;

    span {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        color: ${({ theme }) => theme.colors["base-text"]};
        font-size: 1rem;
        font-weight: normal;

        &:last-child {
          font-size: 1.3rem;
        }
      }

      &:last-child {
        p {
          font-size: 1.8rem;
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 1320px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 1320px) {
    width: 100%;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  margin-top: 12px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 20px;
  color: ${({ theme }) => theme.colors["white"]};
  background-color: ${({ theme }) => theme.colors["yellow"]};
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const CoffeeList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  padding-right: 10px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({theme}) => theme.colors['base-card']};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors['base-hover']};
    border-radius: 10px;
  }

  @media (min-width: 600px) {
    max-height: 410px;
  }
`;

export const CoffeeItem = styled.li`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-hover"]};

  img {
    width: 100px;
  }

  div {
    display: flex;
  }

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 1320px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  gap: 10px;

  svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }
`;

export const TitleContent = styled.p`
  font-size: 1.3rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors["base-text"]};
`;

export const PriceContent = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors["base-text"]};
`;

export const CounterActions = styled.div`
  height: 40px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  gap: 3px;
  text-align: center;

  p {
    min-width: 20px;
  }
`;

export const CounterButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 10px;
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
