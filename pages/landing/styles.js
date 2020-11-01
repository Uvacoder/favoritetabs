import styled from 'styled-components';

export const Background = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  position: absolute;
  overflow: hidden;
  img {
    min-width: 100vw;
    max-height: 100vh;
  }
  svg {
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100vw;
  }
  margin: 0 auto;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  padding: 0 100px;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'main' 'footer';
  align-content: space-between;
  min-height: 100vh;

  right: 0;
  left: 0;

   @media screen and (max-width: 690px) {
     padding: 0 10px;
   }
`;

export const Main = styled.div`
  grid-area: 'main';
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'welcome' 'goapp';

  font-weight: bold;
  color: #fff;

  .welcome {
    grid-area: 'welcome';

    display: flex;
    align-items: center;
    h1 {
      font-family: 'Poppins-Black';
      font-size: clamp(1rem, 3.5vw, 3.5rem);
      letter-spacing: 1rem;
      max-width: min-content;
      span {
        box-shadow: inset 0 -9px 0 rgba(255, 121, 242, 0.2);
      }
    }
  }
  .go-app {
    font-family: 'Poppins-Regular';
    grid-area: 'goapp';

    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-flow: column wrap;

    margin: 5rem 0 0 0;

    p {
      letter-spacing: 2px;
      max-width: 60%;
      font-size: clamp(0.8rem, 2vw, 1.2rem);
    }
  }
  @media screen and (max-width: 690px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'welcome';

    .welcome, .go-app {
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Button = styled.button`
  height: 3rem;
  background-color: rgba(250, 250, 250, 0);
  font-family: 'Poppins-Bold';
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: #fff;
  border: 2.7px solid rgba(250, 250, 250,1);
  outline: none;
  padding: 20px;
  margin: 2rem 0 0 0;
  border-radius: 2rem;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  transition: box-shadow 0.3s ease;
  &:focus {
    box-shadow: 0 0 10px 3px rgba(255, 121, 242, 0.5);
  }
  &:hover {
    box-shadow: 0 0 10px 3px rgba(255, 121, 242, 0.5);
  }
`;

export const Footer = styled.div`
  grid-area: 'footer';
  align-self: end;

  img {
    width: 10%;

    @media screen and (max-width: 1030px) {
      width: 25%;
    }
  }
`;
