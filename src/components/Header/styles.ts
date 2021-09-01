import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 148px;
  background-color: ${({theme}) => theme.colors.primary};

`;

export const Content = styled.View`
  margin: 40px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.Image`
`;
export const Button = styled.TouchableOpacity`
`;