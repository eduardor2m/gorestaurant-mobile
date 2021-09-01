import React from 'react';
import { AppBar } from '../../components/AppBar';
import { DishSpecific } from '../../components/DishSpecific';

import {
  Container,
  Wrraper
} from './styles';

export function Dish({navigation}){
  return (
    <Container>
      <AppBar navigation={navigation}/>
      <Wrraper>
        <DishSpecific />
      </Wrraper>

    </Container>
  );
}