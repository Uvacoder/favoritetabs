import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40%;
  width: 35%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  img {
    position: absolute;

    width: 25%;
    min-width: 1.3rem;

    right: 0;
    
    transition: transform 0.5s, -webkit-transform 0.5s;
    &.light {
      transform: scale(1);
    }
    &.dark {
      transform: scale(0);
    }
    @media screen and (min-width: 432px) and (max-width: 100vw) {
      width: 1.4rem;
    }
  }
  @media screen and (min-width: 313px) {
    max-width: 25%;
  }
`;
