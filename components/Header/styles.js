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
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-family: ${({ theme }) => theme.fontSecondary};
    font-weight: bolder;
    color: ${({ theme }) => theme.title};
  }
`;

export { header };
