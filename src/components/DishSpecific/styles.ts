import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 366px;
  background: ${({theme}) => theme.colors.shape};
  border-radius: 8px;
  flex-direction: column;
`;

export const Content = styled.View`
  width: 100%;
  height: 184px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${({theme}) => theme.colors.secondary};

`;

export const WrraperInfo = styled.View`
  width: 100%;
  height: 184px;
  padding: 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: ${({theme}) => theme.colors.shape};

`;

export const Photo = styled.View`
  width: 100%;
  height: 184px;
  align-items: center;
  margin-top: 30px;

`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 20px;
  color: ${props => props.theme.colors.title};

`;
export const Description = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 15px;
  color: ${props => props.theme.colors.text};

`;
export const Price = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 24px;
  color: ${props => props.theme.colors.text};

`;