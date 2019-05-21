// @flow
import * as React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '~/styles';
import { Text, Heading2, SmallText } from '.';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  color: var(--color-white);
  padding: 1rem 2rem;
  width: 100%;
  min-height: 12rem;
  box-shadow: var(--box-shadow-1);
  background-color: ${({ bgColor }) => bgColor || 'var(--color-white)'};
  @media (max-width: ${breakpoints.small}) {
    min-height: initial;
    justify-content: initial;
  }
`;

const CoinView = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  span {
    font-weight: bold;
    margin-left: 0.4rem;
  }
  @media (max-width: ${breakpoints.small}) {
    margin: 0;
  }
`;

const CoinImageView = styled.div`
  position: absolute;
  right: -2rem;
  bottom: -2rem;
  transform: rotate(10deg);
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 7rem;
    fill: ${props => props.color || colors.white};
  }
  h1 {
    font-size: 7rem;
    color: ${props => props.color || colors.white};
  }
`;

type Props = {
  color: string,
  value: string,
  name: string,
  icon?: React.ComponentType<*>,
};

const Coin = (props: Props) => {
  const {
    color, value, name, icon,
  } = props;
  return (
    <Card bgColor={color}>
      <Text>Saldo</Text>
      <CoinView>
        <Heading2>{value}</Heading2>
        <SmallText>{name.toUpperCase()}</SmallText>
      </CoinView>
      <CoinImageView color={color}>{icon}</CoinImageView>
    </Card>
  );
};

Coin.defaultProps = {
  icon: null,
};

export default Coin;
