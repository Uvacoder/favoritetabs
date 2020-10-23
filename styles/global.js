/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

import Inter_Regular from '../fonts/Inter_Web/Inter-Regular.woff2';
import Inter_SemiBold from '../fonts/Inter_Web/Inter-SemiBold.woff2';

const GlobalStyles = createGlobalStyle`
   @font-face {
    font-family: 'Inter';
    src: url(${Inter_Regular}) format('woff2');
    src: url('${Inter_Regular}?#iefix') format('embedded-opentype'),
        url(${Inter_Regular}) format('woff2'),
        url(${Inter_Regular}) format('woff'),
        url(${Inter_Regular}) format('truetype')
  }

  @font-face {
    font-family: 'InterBold';
    src: url(${Inter_SemiBold}) format('woff2')
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  input, textarea, button {
    font-family: ${({ theme }) => theme.fontPrimary}; 
  }

  html {
    scroll-behavior: smooth;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    width: 100%;
    margin: 0;
    padding: 0;
    transition: background 0.3s ease-in-out;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track-piece {
    background: #16171d;
    border-left: 1px solid #16171d;
  }
  ::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:horizontal {
    background: #df7296;
    border-radius: 10rem;
  }
  ::-webkit-scrollbar-thumb:vertical:hover,
  ::-webkit-scrollbar-thumb:horizontal:hover {
    background: #c14c6f;
  }
}
`;

export { GlobalStyles };
