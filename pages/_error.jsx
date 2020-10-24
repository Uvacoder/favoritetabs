import Link from 'next/link';
import React from 'react';

import PageNotFound from '../public/error-404-colour.svg';
import Container from './Error/styles';

export default function Error() {
  return (
    <Container>
      <img
        src={PageNotFound}
        alt="Ops, a página que você procura não foi encontrada"
      />
      <p>Ops... This page could not be found!</p>
      <Link href="/">Get up to initial page ?</Link>
    </Container>
  );
}
