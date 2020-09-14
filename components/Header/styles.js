import styled from 'styled-components';

const header = styled.header`
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  width: 100%;
  h1 {
    margin: 2rem 0 0 0;
    font-size: clamp(16px, 2vw, 1.8rem);
    font-family: ${({ theme }) => theme.fontPrimary};
    font-weight: 900;
    color: ${({ theme }) => theme.title};
  }
`;

export { header };
