import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #1b1b23;
`;

export const FlatListStyle = styled.FlatList`
  padding: 10px 10px;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  border-radius: 4px;
  background: #fff;
  padding: 20px;
  width: 230px;
  height: 380px;
  margin-right: 30px;
`;

export const Image = styled.Image`
  flex: 1;
  height: 220px;
  width: 220px;
`;

export const ProductName = styled.Text`
  color: #333;
  font-size: 16px;
  margin: 2px;
`;

export const ProductPrice = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200px;
  padding: 0 0 10px;
`;

export const ProductPriceText = styled.Text`
  color: #333;
  font-size: 24px;
  margin: 2px;
  font-weight: bold;
`;

// Quando não existe um componente por padrão é possível colocar o componente desejado entre parênteses:
export const SubmitButton = styled(RectButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 200px;
  background: #7159c1;
  border-radius: 4px;
  margin: 0 5px;
  padding: 0;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const ContainerButtonText = styled.View`
  display: flex;
  flex: 6;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ContainerIconAddToCart = styled.View`
  background: rgba(0, 0, 0, 0.2);
  width: 40px;
  height: 40px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 7px;
  justify-content: space-between;
`;

export const Quantity = styled.Text`
  color: #fff;
  font-size: 14px;
`;
