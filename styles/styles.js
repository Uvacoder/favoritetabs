import styled, { keyframes } from 'styled-components';

const layout = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100vh;
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

const main = styled.main`
  margin-top: 3rem;
  width: 100%;
  min-height: 81vh;
  flex: 1;
  display: flex;
  flex-flow: column wrap;
`;

const form = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  place-content: center;

  label {
    display: block;
    color: ${({ theme }) => theme.font};
    font-family: ${({ theme }) => theme.fontSecondary};
    margin: 0 0 10px 0;
    width: 100%;
  }
  input {
    padding: 1rem;
    outline: 0;
    margin: 0 0 20px 0;
    border: none;
    border-radius: 4px;
    width: 100%;
    background: ${({ theme }) => theme.blockquoteBorder};
    color: ${({ theme }) => theme.input};
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: clamp(12px, 2vw, 0.8rem);
    &::placeholder {
      color: ${({ theme }) => theme.textLow};
    }
  }
`;

const button = styled.button`
  margin: 15px 0;
  border: none;
  outline: none;
  padding: 15px 5px;
  border-radius: 4px;
  width: 45%;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  background: ${({ theme }) => theme.primary};
  font-family: ${({ theme }) => theme.fontSecondary};
  color: #fefefe;
  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

const div = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const section = styled.section`
  min-width: max-content;
  width: 100%;
  margin-top: 1rem;

  span:first-of-type {
    margin-top: 2rem;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.box};
    margin: 15px 0 0 0;
    height: 3rem;
    border-left: 0.3rem solid ${({ theme }) => theme.borderShadow};

    a {
      box-shadow: inset 0 -5px 0 ${({ theme }) => theme.primary};
      transition: box-shadow 0.5s ease;
      font-size: clamp(16px, 2vw, 1.2rem);
      font-family: ${({ theme }) => theme.primary};
      margin: 0 0 0 10px;
      &:hover {
        box-shadow: inset 0 -5px 0 ${({ theme }) => theme.primaryHover};
      }
    }
    button {
      margin: 15px 0;
      border: none;
      outline: none;
      width: 30%;
      height: 80%;
      cursor: pointer;
      transition: background 1s ease-in-out;
      background: ${({ theme }) => theme.button};
      font-size: clamp(12px, 2vw, 1.2rem);
      color: #fefefe;
      height: 100%;
      position: relative;
      &:after,
      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        transition: transform 0.3s ease-in-out;
      }
      &:before {
        border-left: 1px solid ${({ theme }) => theme.text};
        border-right: 1px solid ${({ theme }) => theme.text};
        transform: scaleY(0);
      }
      &:after {
        border-top: 1px solid ${({ theme }) => theme.text};
        border-bottom: 1px solid ${({ theme }) => theme.text};
        transform: scaleX(0);
      }

      &:hover:after {
        transform: scaleY(1);
      }
      &:hover:before {
        transform: scaleX(1);
      }

      &:hover {
        background: ${({ theme }) => theme.buttonHover};
      }
    }
  }
`;

const hr = styled.hr`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  height: 1px;
  border: none;
  opacity: 0.2;
`;

export { layout, main, form, button, div, section, hr };
