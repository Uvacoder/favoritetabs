import styled from 'styled-components';

const header = styled.header`
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin: 1.5rem 0 0 0;
  a {
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-family: 'Poppins_Bold', -apple-system, Roboto, Ubuntu, Cantarell, sans-serif;
    font-weight: bolder;
    color: ${({ theme }) => theme.title};
  }
`;

export { header };
