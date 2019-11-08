import styled from 'styled-components/native';
import { Image, RectButton } from 'react-native-gesture-handler';

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const Container = styled.View`
  display: flex;
  background: #141419;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 10px;
`;

export const Badge = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #7159c1;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  position: relative;
  z-index: 10;
  top: -10px;
  right: -34px;
`;

export const Quantity = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
`;

export const LogoButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 4px;
  margin-left: 0px;
  padding: 0 12px;
`;

export const IconButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
`;
