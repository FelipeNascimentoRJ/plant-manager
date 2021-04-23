import React from 'react';

import { EnvironmentProps, Container, Title } from './styles';

const Environment: React.FC<EnvironmentProps> = ({ title, active, ...rest }) => {
  return (
    <Container active={active} {...rest}>
      <Title active={active}>
        {title}
      </Title>
    </Container>
  );
};

export default Environment;
