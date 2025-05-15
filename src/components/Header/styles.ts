import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 380px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const LogoContent = styled.img`
  width: 7rem;
  height: 4rem;

  @media (max-width: 380px) {
  }
`;

export const RightContent = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["purple-light"]};
  color: ${({ theme }) => theme.colors["purple-dark"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["purple-dark"]};
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const CartButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["yellow-light"]};
  color: ${({ theme }) => theme.colors["yellow-dark"]};
  cursor: pointer;

  span {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    color: ${({ theme }) => theme.colors["white"]};
    padding: 1px 4.5px;
    font-size: 0.7rem;
    font-weight: bold;
    border-radius: 80px;
    text-align: center;

    position: absolute;
    top: -5px;
    right: -5px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors["yellow-light"]};
    background-color: ${({ theme }) => theme.colors["yellow"]};
  }
`;

export const NewOrderButton = styled.button`
  border: none;
  padding: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors["white"]};
  background-color: ${({ theme }) => theme.colors["yellow"]};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;
