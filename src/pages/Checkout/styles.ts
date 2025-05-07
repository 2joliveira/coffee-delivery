import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 5%;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  h1 {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const OrderContainer = styled.div`
  height: 100%;
  width: 54%;
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
`;

export const PaymentOption = styled.button`
  width: 235px;
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
`;

export const SelectedCoffeesContainer = styled.div`
  height: 100%;
  width: 42%;
`;

export const CoffeeList = styled.ul``;

export const CoffeeItem = styled.li``;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
`;
