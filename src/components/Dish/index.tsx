import React from 'react';

import {
  Container,
  Image,
  Content,
  Title,
  Description,
  Price,
} from './styles';
import Photo from '../../assets/molho.svg';

export function Dish({navigation}){
  return (
    <Container onPress={() => navigation.navigate('Dish')}>
      <Image>
        <Photo />
      </Image>
      <Content>
        <Title>Ao Molho</Title>
        <Description>Macarrão ao molho branco, fughi e cheiro verde das montanhas.</Description>
        <Price>R$ 19,90</Price>
      </Content>

    </Container>
  );
}