/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import navigation from '../../services/navigations';

import { Logo, Container, LogoButton, Badge, Quantity } from './styles';

import logo from '../../assets/images/logo.png';

export default function LogoTitle() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('Main')}>
        <Logo source={logo} />
      </LogoButton>
      <Container>
        <Badge>
          <Quantity>{cartSize}</Quantity>
        </Badge>
        <Icon
          onPress={() => navigation.navigate('Cart')}
          name="shopping-basket"
          color="#fff"
          size={25}
        />
      </Container>
    </Container>
  );
}
