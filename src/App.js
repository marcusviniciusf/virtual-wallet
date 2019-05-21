// @flow
import React, { useState, useEffect } from 'react';
import {
  Container, Heading1, CardCoin, Modal, Button, ButtonSecondary,
} from '~/components';
import styled from 'styled-components';
import { breakpoints, colors } from '~/styles';
// Assets
import { DollarIcon, BtcIcon } from '~/assets/icons';
// Api
import { ApiCoins } from './api';

const Title = styled(Heading1)`
  text-align: center;
  /* margin: 2rem 0; */
`;

const Cards = styled.div`
  display: flex;
  margin: 2rem 0;
    @media (max-width: ${breakpoints.small}){
      flex-wrap: wrap;
    } 
  & > div:nth-child(2) {
    margin: 0 1rem;
    @media (max-width: ${breakpoints.small}){
      margin: 1rem 0;
    } 
  }

`;

const NewTransactionView = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  border-radius: 1rem;
  background-color: var(--color-white);
  width: 100%;
  box-shadow: var(--box-shadow);
  @media (max-width: ${breakpoints.small}) {
    border-radius: 0;
  }
`;

const TransactionsList = styled.ul``;
const TransactionsListItem = styled.li``;

const App = () => {
  const [modalOpen, handleModal] = useState(false);
  useEffect(() => {
    async function getCoins() {
      const response = await ApiCoins();
      console.log('response: ', response);
    }
    getCoins();
  }, []);
  const handleOpenModal = () => {
    handleModal(true);
  };
  const handleCloseModal = () => {
    handleModal(false);
  };
  return (
    <section>
      <Container>
        <Title>Virtual Wallet</Title>
        <Cards>
          <CardCoin color={colors.blueLight} value={1231} name="btc" icon={<BtcIcon />} />
          <CardCoin color={colors.primary} value={1231} name="R$" icon={<DollarIcon />} />
          <CardCoin color={colors.orange} value={1231} name="Brita" icon={<DollarIcon />} />
        </Cards>
        <NewTransactionView>
          <ButtonSecondary onClick={handleOpenModal}>Nova Transação</ButtonSecondary>
        </NewTransactionView>
        <Button onClick={handleOpenModal}>Confirmar</Button>
        <Button outlined onClick={handleOpenModal}>
          Cancelar
        </Button>
        <Box />
        <Modal modalOpen={modalOpen} onClose={handleCloseModal} />
      </Container>
    </section>
  );
};
export default App;
