import numeral from 'numeral';

// load a locale
numeral.register('locale', 'pt-br', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal(number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'R$',
  },
});

// switch between locales
numeral.locale('pt-br');

export default numeral;
