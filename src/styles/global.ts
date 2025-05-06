import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme.colors['white']};
    color: ${(props) => props.theme.colors['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, p {
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-weight: 400;
    font-size: 1rem;
  }
`;
