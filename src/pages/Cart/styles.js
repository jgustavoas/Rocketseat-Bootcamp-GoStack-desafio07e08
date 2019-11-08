import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #191920;
  align-items: center;
`;

export const CartContainer = styled.View`
  padding: 10px;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;
  border-radius: 4px;
  background: #fff;
`;

export const FlatListStyle = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  padding: 0;
  margin-bottom: 10px;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  border-radius: 4px;
  padding: 0 5px;
  background: #fff;
`;

export const ProductRow = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
`;

export const Product = styled.View`
  display: flex;
  flex: 1;
  padding: 0 5px;
`;

export const ProductName = styled.Text`
  color: #333;
  font-size: 13px;
  margin: 2px;
`;

export const ProductPriceText = styled.Text`
  color: #333;
  font-size: 18px;
  margin: 2px;
  font-weight: bold;
`;

export const Quantity = styled.View`
  background: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 0 5px;
  margin: 5px 0 20px 0;
  height: 40px;
  width: 100%;
`;

export const QuantityOptions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuantityNumber = styled.Text`
  color: #777;
  padding: 0 15px;
  font-size: 18px;
`;

export const QuantityPrice = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

export const IconButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const TotalContainer = styled.View`
  display: flex;
`;

export const TotalText = styled.Text`
  color: #999;
  padding-top: 7px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const PriceTotalText = styled.Text`
  color: #333;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

// Quando não existe um componente por padrão é possível colocar o componente desejado entre parênteses:
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #7159c1;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 12px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
