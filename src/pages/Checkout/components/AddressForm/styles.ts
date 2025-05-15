import styled, { css } from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
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
    min-width: 40px;
  }

  form {
    margin-top: 30px;

    input {
      height: 55px;
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

    p {
      color: red;
      font-size: 0.6rem;
      margin-top: 5px;
      padding-left: 5px;
    }

    .shortInput {
      width: 35%;
    }

    .city {
      width: 53%;
    }

    .complement {
      width: 64%;
    }

    .uf {
      width: 10%;
    }

    .inputsRow {
      display: flex;
      justify-content: space-between;

      @media (max-width: 750px) {
        flex-direction: column;
      }
    }

    .shortInput,
    .complement,
    .city,
    .uf {
      @media (max-width: 750px) {
        width: 100%;
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

export const PaymentOption = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 15px;
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

  ${({ isSelected }) =>
    isSelected
      ? css`
          border: 2px solid ${({ theme }) => theme.colors["purple-dark"]};
          background-color: ${({ theme }) => theme.colors["purple-light"]};
        `
      : css`
          color: ${({ theme }) => theme.colors["base-text"]};
          background-color: ${({ theme }) => theme.colors["base-button"]};
        `}

  @media (max-width: 745px) {
    justify-content: center;
    padding: 10px;
  }
`;
