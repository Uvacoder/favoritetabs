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
  max-width: 100vw;
  padding: 0 10px;
  min-height: 100vh;
  position: relative;
  @media screen and (min-width: 1280px) {
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

export const Main = styled.main`
  margin-top: 1.5rem;
  width: 100%;
  min-height: 81vh;
  display: flex;
  flex-flow: column wrap;

  @media screen and (min-width: 1280px) {
    width: 100vw;
    max-width: 90vw;
    display: grid;
    gap: 0 60px;
    grid-template-columns: 1fr 1.5fr;
    min-height: 100vh;
  }
  @media screen and (min-width: 454px) {
    padding: 0 20px;
    margin: 1.5rem auto;
  }
  @media screen and (min-width: 507px) and (max-width: 648px) {
    max-width: 90%;
    margin: 1.5rem auto;
  }
  @media screen and (min-width: 649px) and (max-width: 809px) {
    max-width: 70%;
    margin: 1.5rem auto;
  }
  @media screen and (min-width: 809px) and (max-width: 1279px) {
    max-width: 30rem;
    margin: 1.5rem auto;
  }
  @media screen and (min-width: 7476px) {
    max-width: 40%;
    margin: 1.5rem auto;
  }
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
  @media screen and (min-width: 1280px) {
    place-content: start;
    max-width: 80%;
  }
`;

export const Button = styled.button`
  margin: 15px 0;
  border: none;
  outline: none;
  padding: 15px 5px;
  border-radius: 4px;
  width: 45%;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  background: ${({ theme }) => theme.primaryHover};
  font-family: 'InterBold', -apple-system, Roboto, Ubuntu, Cantarell, sans-serif;
  font-size: clamp(13px, 1.5vw, 0.9rem);
  color: #fefefe;
  animation: ${fadeIn} 1000ms both;
  position: relative;
  &:hover {
    background: ${({ theme }) => theme.primary};
  }
`;

export const ContainerFormButtons = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Download = styled.a`
  font-family: 'Inter', -apple-system, Roboto, Ubuntu, Cantarell, sans-serif;
  font-size: clamp(13px, 1.5vw, 0.9rem);
  background: ${({ theme }) => theme.primaryHover};
  max-width: 45%;
  width: 45%;
  padding: 15px 5px;
  border-radius: 4px;
  height: min-content;
  cursor: pointer;
  color: #fefefe;
  text-align: center;
  transition: background 0.4s ease-in-out;
  animation: ${fadeIn} 1000ms both;
  &:hover {
    background: ${({ theme }) => theme.primary};
  }
`;
