/* eslint-disable react/state-in-constructor */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import numeral from '../../util/numeral';

import {
  Container,
  CartContainer,
  FlatListStyle,
  Item,
  ProductRow,
  Image,
  ProductName,
  Product,
  ProductPriceText,
  Quantity,
  QuantityOptions,
  QuantityNumber,
  QuantityPrice,
  TotalContainer,
  TotalText,
  PriceTotalText,
  IconButton,
  SubmitButton,
  ButtonText,
} from './styles';

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: numeral(product.price * product.amount).format('$0,0.00'),
    }))
  );

  const totalPrice = useSelector(state =>
    numeral(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    ).format('$0,0.00')
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <>
      <Container>
        {products.length ? (
          <CartContainer>
            <FlatListStyle
              data={products}
              renderItem={({ item }) => (
                <Item>
                  <ProductRow>
                    <Image source={{ uri: item.image }} />
                    <Product>
                      <ProductName>{item.title}</ProductName>
                      <ProductPriceText>
                        {numeral(item.price).format('$0,0.00')}
                      </ProductPriceText>
                    </Product>
                    <IconButton
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(item.id))
                      }
                    >
                      <Icon name="delete" color="#7159c1" size={20} />
                    </IconButton>
                  </ProductRow>
                  <Quantity>
                    <QuantityOptions>
                      <IconButton onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          color="#7159c1"
                          size={20}
                        />
                      </IconButton>
                      <QuantityNumber>{item.amount}</QuantityNumber>
                      <IconButton onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          color="#7159c1"
                          size={20}
                        />
                      </IconButton>
                    </QuantityOptions>
                    <QuantityPrice>{item.subtotal}</QuantityPrice>
                  </Quantity>
                </Item>
              )}
              keyExtractor={item => item.id.toString()}
            />
            <TotalContainer
              style={{ borderTopColor: '#ddd', borderTopWidth: 1 }}
            >
              <TotalText>TOTAL</TotalText>
              <PriceTotalText>{totalPrice}</PriceTotalText>
              <SubmitButton>
                <ButtonText>FINALIZAR PEDIDO</ButtonText>
              </SubmitButton>
            </TotalContainer>
          </CartContainer>
        ) : (
          <TotalText>Seu carrinho está vazio</TotalText>
        )}
      </Container>
    </>
  );
}
