import styled, { keyframes } from 'styled-components';

const spinnerReverse = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  max-width: 9%;
  &:active {
    animation: ${spinnerReverse} 500ms ease-out both;
  }
  @media screen and (min-width: 313px) {
    max-width: 5%;
  }
`;
