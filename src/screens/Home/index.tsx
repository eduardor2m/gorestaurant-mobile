import React from 'react';
import { Category } from '../../components/Category';
import { Dish } from '../../components/Dish';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Content, Title, CategoriesList, PlatesList } from './styles';

export function Home({navigation}){
  return (
    <Container>
      <Header />
      <Content>
        <Input />
        <Title>Categorias</Title>
          <CategoriesList 
            data={[0, 1, 2, 3, 4, 5]}
            keyExtractor={(item) => String(item)}
            renderItem={({ item }) => <Category />}

          />
          <Title>Pratos</Title>
          <PlatesList 
            data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={(item) => String(item)}
            renderItem={({ item }) => <Dish navigation={navigation}/>}

          />
      </Content>
    </Container>
  );
}