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

export const AddressContent = styled.div`
  padding: 50px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors["base-card"]};

  h2 {
    font-weight: normal;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  h3 {
    font-weight: normal;
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  svg {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  form {
    margin-top: 30px;

    input {
      padding: 10px;
      border-radius: 7px;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
      background-color: ${({ theme }) => theme.colors["base-input"]};
      border: 1px solid ${({ theme }) => theme.colors["base-hover"]};
      margin-top: 10px;

      &:hover {
        background-color: ${({ theme }) => theme.colors["base-hover"]};
      }
    }
  }
`;

export const PaymentContent = styled(AddressContent)`
  svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  gap: 20px;

  @media (max-width: 745px) {
    flex-direction: column;
  }
`;

export const PaymentOption = styled.button`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors["base-text"]};
  background-color: ${({ theme }) => theme.colors["base-button"]};
  cursor: pointer;

  svg {
    margin: 0;
  }

  p {
    margin-left: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["purple-dark"]};
  }


  @media (max-width: 745px) {
    justify-content: center;
    padding: 10px;
  }
`;

export const SelectedCoffeesContainer = styled.div`
  height: 100%;
  width: 35%;
  min-width: 500px;

  main {
    margin-top: 20px;
    padding: 50px;
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
  margin-top: 30px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 20px;
  color: ${({ theme }) => theme.colors["white"]};
  background-color: ${({ theme }) => theme.colors["yellow"]};
  cursor: pointer;
`;

export const CoffeeList = styled.ul`
  list-style-type: none;
  padding-left: 0;
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
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["purple-dark"]};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
`;
