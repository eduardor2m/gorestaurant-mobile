import React from 'react';
import {
  Container,
  Content,
  Logo,
  Button,
} from './styles';

import LogoSvg from '../../assets/logo.svg';
import { Ionicons } from '@expo/vector-icons';

export function Header() {
  return (
    <Container>
      <Content>
        <LogoSvg 
          width={196}
          height={40}
        />
        <Button onPress={() => {}}>
          <Ionicons name="enter-outline" size={24} color="#FFB84D" />
        </Button>
      </Content>

    </Container>
  );
}