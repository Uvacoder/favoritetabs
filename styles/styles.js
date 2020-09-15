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

  .container {
    background: ${({ theme }) => theme.box};
    width: 100%;
    height: max-content;
    padding: 10px 0 0 10px;
    border-left: 3px solid ${({ theme }) => theme.textLow};
    position: relative;
    margin-top: 2rem;
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      a {
        box-shadow: inset 0 -6px ${({ theme }) => theme.primary};
        font-family: ${({ theme }) => theme.fontSecondary};
        &:hover {
          box-shadow: inset 0 -6px ${({ theme }) => theme.primaryHover};
        }
      }
      button {
        outline: 0;
        border: 0;
        position: absolute;
        top: 10px;
        right: 0;
        margin-right: 10px;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        background: ${({ theme }) => theme.primary};
        color: #fff;
        cursor: pointer;
        transition: background 0.3s ease-out;
        &::before {
          content: 'X';
        }
        &:hover {
          background: ${({ theme }) => theme.primaryHover};
        }
      }
    }
    .added {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      p {
        font-size: clamp(10px, 2vw, 0.6rem);
        font-family: ${({ theme }) => theme.fontSecondary};
        margin-right: 10px;
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

const error = styled.span`
  display: block;
  font-size: clamp(12px, 2vw, 0.8rem);
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.title};
`;

const header = styled.header`
  height: 2rem;
`

export { layout, main, form, button, div, section, hr, error, header };
