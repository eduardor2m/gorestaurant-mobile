import styled from 'styled-components/native';

export const Container = styled.View`
  width: 120px;
  height: 128px;
  background: ${props => props.theme.colors.shape};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 16px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.text};
  margin-top: 25px;
`;