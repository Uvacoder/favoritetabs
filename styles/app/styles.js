import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Layout = styled.div`
  width: 100vw;
  padding: 0 10px;
  height: 100vh;
  position: relative;
  @media (min-width: 25em) {
    max-width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 43.75em) {
    max-width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 56.25em) {
    max-width: 60%;
    margin: 0 auto;
  }
  @media (min-width: 75em) and (max-width: 486.063em) {
    max-width: 35rem;
    margin: 0 auto;
  }
`;

export const Main = styled.main`
  margin-top: 3rem;
  width: 100%;
  min-height: 81vh;
  flex: 1;
  display: flex;
  flex-flow: column wrap;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  place-content: center;

  label {
    display: block;
    color: ${({ theme }) => theme.font};
    font-family: 'Inter', -apple-system, Roboto, Ubuntu, Cantarell, sans-serif;
    margin: 0 0 10px 0;
    width: 100%;
    font-size: clamp(14px, 1rem, 2vw);
  }
  label:last-of-type {
    margin-top: 1rem;
  }
  input {
    padding: 1rem;
    outline: 0;
    margin: 0 0 10px 0;
    border: none;
    border-radius: 4px;
    width: 100%;
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.input};
    font-family: 'Inter', -apple-system, Roboto, Ubuntu, Cantarell, sans-serif;
    font-size: clamp(12px, 2vw, 0.8rem);
    &::placeholder {
      color: ${({ theme }) => theme.textLow};
    }
  }
`;

export const Button = styled.button`
  margin: 15px 0;
  border: none;
  outline: none;
  padding: 15px 5px;
  border-radius: 8px;
  width: 45%;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  background: ${({ theme }) => theme.primary};
  font-family: 'InterBold', -apple-system, Roboto, Ubuntu, Cantarell, sans-serif;
  color: #fefefe;
  animation: ${fadeIn} 1000ms both;
  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

export const ContainerFormButtons = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


export const Error = styled.span`
  display: block;
  font-size: clamp(12px, 2vw, 0.8rem);
  font-family: 'Inter', -apple-system, Roboto, Ubuntu, Cantarell, sans-serif;
  color: ${({ theme }) => theme.title};
  animation: ${fadeIn} 1000ms both;
`;

export const Footer = styled.header`
  height: 2rem;
`;
