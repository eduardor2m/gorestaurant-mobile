import styled from 'styled-components/native';
import { FlatList } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  margin-top: -27.5px;
  width: 100%;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.title};
  margin: 40px 0 16px;
`;

export const CategoriesList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  width: 100%;
  height: 168px;
`;

export const PlatesList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  height: 330px;
`;
