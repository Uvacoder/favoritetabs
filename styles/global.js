/* eslint-disable max-len */
import { createGlobalStyle, keyframes } from 'styled-components';

import Inter_Regular from '../fonts/Inter_Web/Inter-Regular.woff2';
import PoppinsBlack from '../fonts/Poppins/Poppins-Black.ttf';
import PoppinsBold from '../fonts/Poppins/Poppins-Bold.ttf';
import PoppinsRegular from '../fonts/Poppins/Poppins-Regular.ttf';

const fadeIn = keyframes`
  from {
    transform: scale(100);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

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
    font-family: 'Poppins-Regular';
    src: url(${PoppinsRegular}) format('woff2');
    src: url('${PoppinsRegular}?#iefix') format('embedded-opentype'),
        url(${PoppinsRegular}) format('woff2'),
        url(${PoppinsRegular}) format('woff'),
        url(${PoppinsRegular}) format('truetype')
  }

  @font-face {
    font-family: 'Poppins-Black';
    src: url(${PoppinsBlack}) format('woff2');
    src: url('${PoppinsBlack}?#iefix') format('embedded-opentype'),
        url(${PoppinsBlack}) format('woff2'),
        url(${PoppinsBlack}) format('woff'),
        url(${PoppinsBlack}) format('truetype')
  }

  @font-face {
    font-family: 'Poppins-Bold';
    src: url(${PoppinsBold}) format('woff2');
    src: url('${PoppinsBold}?#iefix') format('embedded-opentype'),
        url(${PoppinsBold}) format('woff2'),
        url(${PoppinsBold}) format('woff'),
        url(${PoppinsBold}) format('truetype')
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
    transition: background 0.3s ease-in;
    -webkit-font-smoothing: antialiased;
    animation: ${fadeIn}
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
