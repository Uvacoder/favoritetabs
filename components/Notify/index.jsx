import { string } from 'prop-types';
import React from 'react';

import { Container } from './styles';

export default function Notify({ children }) {
  const removeNotify = () => {};

  return (
    <Container>
      <button onClick={removeNotify}>x</button>
      <span>{children}</span>
    </Container>
  );
}

Notify.propTypes = {
  children: string.isRequired,
};
