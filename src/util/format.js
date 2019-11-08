// sintaxe para renomear propriedade desestruturada: "{ prop: novoNome }"
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
