/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import numeral from '../../util/numeral';

import {
  Container,
  ProductName,
  ProductPrice,
  ProductPriceText,
  SubmitButton,
  ButtonText,
  FlatListStyle,
  Item,
  Image,
  Quantity,
  ContainerButtonText,
  ContainerIconAddToCart,
} from './styles';

function Main() {
  const [products, setProducts] = useState([]);

  // USANDO HOOKS:
  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: numeral(product.price).format('$0,0.00'),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <FlatListStyle
        data={products}
        horizontal
        renderItem={({ item }) => (
          <Item>
            <Image source={{ uri: item.image }} />
            <ProductName>{item.title}</ProductName>
            <ProductPrice>
              <ProductPriceText>{item.priceFormatted}</ProductPriceText>
            </ProductPrice>
            <SubmitButton onPress={() => handleAddProduct(item.id)}>
              <ContainerIconAddToCart>
                <Icon name="add-shopping-cart" color="#fff" size={15} />
                <Quantity>{amount[item.id] || 0}</Quantity>
              </ContainerIconAddToCart>
              <ContainerButtonText>
                <ButtonText>ADICIONAR</ButtonText>
              </ContainerButtonText>
            </SubmitButton>
          </Item>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

export default Main;
