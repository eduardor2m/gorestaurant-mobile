import React from 'react';

import { Feather } from '@expo/vector-icons'

import {
  Container,
  Button,
  Title,
} from './styles';

export function AppBar({navigation}){
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Home')}>
        <Feather name="arrow-left" size={24} color="#FFB84D" />
      </Button>
      <Title>Prato - Massas</Title>
      <Button onPress={() => {}}>
        <Feather name="heart" size={24} color="#FFB84D" />
      </Button>

    </Container>
  );
}