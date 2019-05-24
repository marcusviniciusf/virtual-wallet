// @flow
import React from 'react';
import styled from 'styled-components';
// Assets
import { breakpoints } from '~/styles';
// UIComponents
import { Select, Input, Text } from '~/components';
// Util
import { parseCurrency } from '~/util';

type Props = {
  valueAmount: string,
  valueBalance: number,
  onChange: Function,
  newBalance: number,
  coinSelected: string,
  coinTarget: string,
};

const BuyGroup = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${Select}:first-of-type {
    margin: 0 1rem;
    /* @media (max-width: ${breakpoints.small}) {
      margin: initial;
    } */
  }; 
  ${Select} {
    margin-left: 1rem;
    flex: 1;
    width: 100%;
    @media (max-width: ${breakpoints.small}) {
      /* margin-left: 0rem; */
      width: auto;
      flex: initial;
    }
  }
`;

const options = [
  { value: 'brita', label: 'BRITA' },
  { value: 'btc', label: 'BTC' },
  { value: 'brl', label: 'BRL' },
];

const TransactionBuy = (props: Props) => {
  const {
    valueAmount, valueBalance, onChange, newBalance, coinSelected, coinTarget,
  } = props;
  console.log('newBalance: ', newBalance);
  return (
    <>
      <BuyGroup>
        <Text>Comprar:</Text>
        <Input
          type="text"
          placeholder="12,20"
          maxLength={7}
          value={valueAmount}
          onChange={onChange('buyAmount')}
        />
        <Text> de </Text>
        <Select>
          <select onChange={onChange('buyCoinSelected')}>
            <option value="">Selecione</option>
            {options.map((opt, i) => (
              <option key={i} disabled={coinTarget === opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Select>
        <Text> com </Text>
        <Select>
          <select onChange={onChange('buyCoinTarget')}>
            <option value="">Selecione</option>
            {options.map((opt, i) => (
              <option key={i} disabled={coinSelected === opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Select>
      </BuyGroup>
      <Text>Por:</Text>
      <Text>
        {' '}
        <strong>
          {valueBalance ? parseCurrency(valueBalance) : 0}
          {' '}
        </strong>
      </Text>
      <Text>e você irá ficar com: </Text>
      <Text>
        <strong>
          {parseCurrency(newBalance) || 0}
          {coinSelected.toUpperCase()}
        </strong>
      </Text>
    </>
  );
};

export default TransactionBuy;
