// "immer" permite alterar os estados (que originalmente são imutáveis) criando um rascunho ("draft")
// Esse rascunho contém uma função qualquer que altera o state da forma desejada
// o método "produce" de immer "produz" um novo state baseado no rascunho
import produce from 'immer';

export default function cart(state = [], action) {
  // usando a condicional "switch" para escolher qual ação deve fazer o que
  // lembre que todas os reducers existentes são ativadas quando qualquer uma delas é despachada (função "dispatch" no arquivo que se conecta a este reducer.js)
  // neste é exmeplo é o clique "adicionar carrinho"
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        // note que aqui usou-se "product.id", mas em "ADD_TO_CART" usou-se "action.product.id"
        // Isso porque na remoção só é preciso passar a id do produto para "action" e não todo o objeto "produto" (veja em Cart/index.js)
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
