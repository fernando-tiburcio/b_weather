import React from 'react';

import {IHeaderProps} from '../../interfaces'
import { Container, Title } from './styles';

export function Header({localName}: IHeaderProps){
  return (
    <Container>
      <Title>
        {localName}
      </Title>
    </Container>
  );
}
