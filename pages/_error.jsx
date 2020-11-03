import Link from 'next/link';

import PageNotFound from '../public/error-404-colour.svg';
import Container from './Error/styles';

export default function Error() {
  return (
    <Container>
      <img
        src={PageNotFound}
        alt="Oops, the page you are looking for was not found"
      />
      <p>Ops... This page could not be found!</p>
      <Link href="/">Get up to initial page ?</Link>
    </Container>
  );
}
