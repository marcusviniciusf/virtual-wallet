// @flow
const parseCurrency = (n: number): string => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
const parseBtc = () => {};

const normalizeCurrency = (number: string): string => {
  let v = number;
  v = v.replace(/\D/g, '');
  v = v.replace(/(\d{1})$/, '$1');
  v = v.replace(/(\d{,2})$/, ',$1');
  v = v !== '' ? v : '';
  return v;
};

export { parseCurrency, parseBtc, normalizeCurrency };
