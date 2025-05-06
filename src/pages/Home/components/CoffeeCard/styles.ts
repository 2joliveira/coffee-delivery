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
    color: ${({ theme }) => theme.colors["base-label"]};
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
