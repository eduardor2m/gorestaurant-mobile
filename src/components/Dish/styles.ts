import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 114px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: ${props => props.theme.colors.shape};
  border-radius: 8px;
  margin-top: 10PX;
`;

export const Image = styled.View`
  width: 114px;
  height: 114px;
  background: ${props => props.theme.colors.secondary};
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  align-items: center;
  justify-content: center;

`;
export const Content = styled.View`
  width: 60%;

`;
export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 15px;
  color: ${props => props.theme.colors.title};

`;
export const Description = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 10px;
  color: ${props => props.theme.colors.text};

`;
export const Price = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 18px;
  color: ${props => props.theme.colors.sucess};

`;