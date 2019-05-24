// @flow
import React from 'react';
import styled from 'styled-components';
// Assets
import { breakpoints, colors } from '~/styles';
import { DollarIcon, BtcIcon } from '~/assets/icons';
// Components
import Coin from './Coin';
// Util
import { parseCurrency } from '~/util';

const CoinsGroup = styled.div`
  display: flex;
  margin: 2rem 0;
  @media (max-width: ${breakpoints.small}) {
    flex-wrap: wrap;
  }
  & > div:nth-child(2) {
    margin: 0 1rem;
    @media (max-width: ${breakpoints.small}) {
      margin: 1rem 0;
    }
  }
`;

type Props = {
  bitcoin: number,
  brita: number,
  real: number,
};
const Coins = (props: Props) => {
  const { bitcoin, brita, real } = props;
  return (
    <CoinsGroup>
      <Coin color={colors.blueLight} value={parseCurrency(bitcoin)} name="btc" icon={<BtcIcon />} />
      <Coin color={colors.primary} value={parseCurrency(real)} name="R$" icon={<DollarIcon />} />
      <Coin color={colors.orange} value={parseCurrency(brita)} name="Brita" icon={<DollarIcon />} />
    </CoinsGroup>
  );
};

export default Coins;
