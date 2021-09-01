import React from 'react';

import {
  Container,
  Content,
  Photo,
  WrraperInfo,
  Title,
  Description,
  Price,
} from './styles';

import Image from '../../assets/molho.svg';

export function DishSpecific(){
  return (
    <Container>
      <Content>
        <Photo>
          <Image 
            width={252}
            height={252}
          />
        </Photo>
      </Content>
      <WrraperInfo>
        <Title>Ao Molho</Title>
        <Description>Ao Molho é um molho feito com molho de tomate, mussarela e azeitonas.</Description>
        <Price>R$ 15,00</Price>
      </WrraperInfo>

    </Container>
  );
}