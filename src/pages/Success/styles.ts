import { styled } from "styled-components";

interface InfoProps {
  iconcolor: string;
}

export const Container = styled.div`
  padding: 4% 7%;
`;

export const HeaderContainer = styled.header`
  margin-bottom: 40px;
  h1 {
    font-family: "Baloo 2";
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  p {
    font-size: 1.8rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const MainContent = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 40%;
  }
`;

export const PurchaseInfosContainer = styled.section`
  width: 45%;
  padding: 1px;
  background: linear-gradient(120deg, #dbac2c, #8047f8);
  border-radius: 10px 50px 10px 50px;
`;

export const PurchaseInfos = styled.div`
  background-color: white;
  border-radius: 10px 50px 10px 50px;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const InfoContent = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;

  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  svg {
    color: white;
    background-color: ${({ iconcolor }) => iconcolor};
    border-radius: 50px;
    padding: 7px;
  }
`;
