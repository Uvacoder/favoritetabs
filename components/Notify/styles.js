import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 20rem;
  height: 10vh;
  right: 10px;
  bottom: 10px;
  border-radius: 4px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.primary};
  button {
    border-radius: 50%;
    width: 1rem;
    height: 3vh;
    background: ${({ theme }) => theme.primary};
    color: #fefefe;
    outline: none;
    border: none;
    font-size: 16px;
    position: absolute;
    right: 10px;
    top: 0px;
    font-family: ${({ theme }) => theme.fontSecondary};
    cursor: pointer;
  }
  span {
    color: #fefefe;
    font-family: ${({ theme }) => theme.fontPrimary};
  }
`;

export { Container };
