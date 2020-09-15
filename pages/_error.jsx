import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export default function Error() {
  return (
    <Container>
      <p>Ops... This page could not be found!</p>
      <Link href="/">Get up to initial page ?</Link>
    </Container>
  );
}

const Container = styled.section`
  position: absolute;
  left: 0;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  place-content: center;
  transition: all 0.6s ease-out;

  p {
    display: inline;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: clamp(20px, 3vw, 2.5rem);
    color: ${({ theme }) => theme.error};
  }
  a {
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: clamp(15px, 2vw, 1.5rem);
    color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
