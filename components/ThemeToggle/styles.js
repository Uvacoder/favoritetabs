import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.toggle};
  border: none;
  margin: 2rem 0 0 1rem;
  outline: 0;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0 0.05rem;
  position: relative;
  width: 3rem;
  height: 1.2rem;
  img {
    height: 1.2rem;
    width: 1rem;
    transition: all 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035);
    color: #fff;
    /* sun */
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    /* moon */
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      margin: 1px 0.7px 0 0;
    }
  }
  @media (max-width: 1000px) {
    width: 2.4rem;
    height: 0.8rem;
    img {
      height: 0.8rem;
      width: 0.7rem;
    }
  }
  @media (min-width: 200px) and (max-width: 400px) {
    min-width: 2.5rem;
    height: 1rem;
    img {
      height: 1rem;
      width: 1rem;
    }
  }
`;

export { Button };
