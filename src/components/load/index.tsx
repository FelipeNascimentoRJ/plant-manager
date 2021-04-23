import React from 'react';

import { Container, Animation } from './styles';

import load from '../../assets/load.json';

const Load = () => {
  return (
    <Container>
      <Animation source={load} />
    </Container>
  );
};

export default Load;
