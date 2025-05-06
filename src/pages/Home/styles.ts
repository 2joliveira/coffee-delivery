import styled from "styled-components";

interface InfoProps {
  color: "yellow-dark" | "yellow" | "base-text" | "purple";
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 7%;
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    margin-top: 0;
  }
`;

export const Description = styled.div`
  width: 60%;

  h1 {
    font-family: "Baloo 2";
    font-size: 5rem;
    line-height: 1;
  }

  p {
    font-size: 2.1rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  @media (max-width: 1500px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const InfosContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  @media (max-width: 1300px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Info = styled.section<InfoProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  svg {
    min-width: 32px;
    min-height: 32px;
    background-color: ${({ theme, color }) => theme.colors[color]};
    color: #fff;
    padding: 7px;
    border-radius: 50%;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;

  @media (max-width: 1300px) {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageContent = styled.img`
  width: 100%;
  min-width: 400px;

  @media (max-width: 1300px) {
    width: 400px;
  }

  @media (max-width: 600px) {
    min-width: 250px;
  }
`;

export const ProductsListContainer = styled.div`
  margin-top: 50px;
  font-family: "Baloo 2";

  h2:first-child {
    margin-bottom: 50px;
    font-size: xx-large;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const ProductsList = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;
