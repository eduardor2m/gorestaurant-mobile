import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 148px;
  background: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
`;

export const Button = styled.TouchableOpacity`

`;
export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};

`;