// @flow
import React, { useState, useEffect } from 'react';
// UIComponents
import { Container, Heading1, ButtonSecondary } from '~/components';
import styled from 'styled-components';
import { breakpoints } from '~/styles';
// Components
import CoinsCards from './components/Coins';
import ModalTransaction from './components/ModalTransaction';
// Storage
import { Coins } from '~/services';

const Title = styled(Heading1)`
  text-align: center;
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

const App = () => {
  const [modalOpen, handleModal] = useState(false);
  const [coins, setCoins] = useState({ brita: 0, btc: 0 });
  const [balances, setBalance] = useState({ btc: 0, brita: 0, real: 100000 });
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    (async function prepareApp() {
      const coinsStorage = await Coins.getCoins();
      console.log(coinsStorage);
      const balancesStorage = Coins.getBalances();
      const transactionsStorage = Coins.getTransactions();
      if (balancesStorage) {
        setBalance(balancesStorage);
      }
      if (transactionsStorage) {
        setTransactions(transactionsStorage);
      }
      setCoins(coinsStorage);
    }());
  }, []);
  const handleOpenModal = () => {
    handleModal(true);
  };
  const handleCloseModal = () => {
    handleModal(false);
  };
  const handleSubmitNewTransaction = (transaction) => {
    Coins.setNewTransaction(transaction);
  };

  const { brita, real, btc } = balances;
  return (
    <section>
      <Container>
        <Title>Carteira Virtual</Title>
        <CoinsCards bitcoin={btc} brita={brita} real={real} />
        <NewTransactionView>
          <ButtonSecondary onClick={handleOpenModal}>Nova Transação</ButtonSecondary>
        </NewTransactionView>
        <Box />
        <ModalTransaction
          modalOpen={modalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitNewTransaction}
          btcPrice={coins.btc}
          britaPrice={coins.brita}
          balances={balances}
        />
      </Container>
    </section>
  );
};
export default App;
