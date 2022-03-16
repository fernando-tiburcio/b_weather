import React from 'react';

import { Container, Title } from './styles';

export function Header({localName}: string){
  return (
    <Container>
      <Title>
        {localName}
      </Title>
    </Container>
  );
}
