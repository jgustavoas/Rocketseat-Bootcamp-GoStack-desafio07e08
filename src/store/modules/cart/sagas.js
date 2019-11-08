import { Alert } from 'react-native';
import { call, select, put, all, takeLatest } from 'redux-saga/effects'; // "put" despacha ("dispatch") uma action do redux
// "takeLatest" considera apenas a última ação se a chamada anterior à api não tiver sido concluída
// Exemplo: quando o usuário clica várias vezes no botão de adicionar, antes que a adição anterior tenha sido completada

import navigation from '../../../services/navigations';

import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import numeral from '../../../util/numeral';

// O asterisco colado a "function" adiciona um recurso do Javascript chamado de "generator"
// Em termos simples, esse "generator" é semelhante ao recurso "async", mas que pode realizar mais coisas
// Esse arquivo "sagas" funciona como um middleware antre a action e o reducer
// Saga vai buscar as informações na api depois de escutar a action e então as envia para o reducer;
function* addToCart({ id }) {
  // "yield" é semelhante ao "await"
  // Porém ele precisa usar uma função chamada "call" responsável por chamar métodos assíncronos e que retornam "promisses"

  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
    // navigation.navigate('Cart');
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: numeral(response.data.price).format('$0,0.00'),
    };

    yield put(addToCartSuccess(data));

    navigation.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
