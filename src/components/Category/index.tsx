import React from 'react';
import {
  Container,
  Content,
  Title,
} from './styles';

import Image from '../../assets/massas.svg';

export function Category(){
  return (
    <Container>
      <Content>
        <Image 
          width={54}
          height={44.8}
        />
        <Title>Massas</Title>
      </Content>

    </Container>
  );
}