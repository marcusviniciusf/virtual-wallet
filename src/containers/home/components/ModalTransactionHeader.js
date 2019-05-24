// @flow
import React from 'react';
import styled from 'styled-components';
// UIComponents
import {
  Heading3, SmallestText, SmallText, Text,
} from '~/components';

const Title = styled(Heading3)`
  margin-bottom: 1rem;
`;

const Info = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.2rem;
`;

const Prices = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-around;
`;

type Props = {
  brita: string,
  btc: string,
};

const ModalHeader = (props: Props) => {
  const { brita, btc } = props;
  function replaceDot(value: string): string {
    const parseValue = String(value);
    return parseValue.replace('.', ',');
  }
  return (
    <>
      <Info>*em BRL</Info>
      <Title>Nova Transação</Title>
      <Text>Cotação Atual:</Text>
      <Prices>
        <div>
          <SmallText>{replaceDot(btc)}</SmallText>
          <SmallestText>BTC*</SmallestText>
        </div>
        <div>
          <SmallText>{replaceDot(brita)}</SmallText>
          <SmallestText>BRITA*</SmallestText>
        </div>
      </Prices>
    </>
  );
};

export default ModalHeader;
