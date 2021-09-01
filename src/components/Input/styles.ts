import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs({
  placeholderTextColor: '#B7B7CC',

})`
  width: 100%;
  height: 56px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  padding: 0 16px;

`;
