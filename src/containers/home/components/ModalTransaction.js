import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
// UIComponents
import { Modal, Button } from '~/components';
import { normalizeCurrency } from '~/util';
// ModalParts
import ModalHeader from './ModalTransactionHeader';
import Buy from './ModalTransactionBuy';

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

type Props = {
  modalOpen: boolean,
  onSubmit: Function,
  onClose: Function,
  britaPrice: number,
  btcPrice: number,
  balances: object,
};

const ModalTransaction = (props: Props) => {
  const {
    modalOpen, onClose, onSubmit, britaPrice, btcPrice, balances,
  } = props;
  // States
  const [buyState, changeBuyState] = useState({
    buyAmount: '',
    buyBalance: 0,
    buyCoinSelected: '',
    buyCoinTarget: '',
    buyError: '',
  });

  const changeNewBalance = useCallback(() => {
    const coinPicked = buyState.buyCoinSelected === 'brita' ? britaPrice : btcPrice;
    const coinTarget = buyState.buyCoinTarget;
    const buyBalance = parseFloat(buyState.buyAmount) * parseFloat(coinPicked);
    changeBuyState(prevState => ({ ...prevState, buyBalance }));
  }, [britaPrice, btcPrice, buyState.buyAmount, buyState.buyCoinSelected, buyState.buyCoinTarget]);

  useEffect(() => {
    changeNewBalance();
  }, [buyState.buyAmount, changeNewBalance]);

  // onChange Buy States
  const handleChangeBuyState = name => (event) => {
    const { value } = event.target;
    event.persist();
    if (name === 'buyAmount') {
      const normalizedValue = normalizeCurrency(value);
      changeBuyState(prevState => ({ ...prevState, [name]: normalizedValue }));
    } else {
      changeBuyState(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const newBalance = balances.real - buyState.buyBalance < 0 ? 0 : balances.real - buyState.buyBalance;

  const handleSubmit = () => {
    const data = {
      coinBase: 'brl',
      coinTarget: buyState.buyCoinSelected,
      value: buyState.buyAmount,
    };
    onSubmit(data);
  };

  const isSubmitDisabled = buyState.buyAmount === '';
  return (
    <Modal modalOpen={!modalOpen} onClose={onClose}>
      <ModalHeader brita={britaPrice} btc={btcPrice} />
      <Buy
        valueAmount={buyState.buyAmount}
        valueBalance={buyState.buyBalance}
        coinSelected={buyState.buyCoinSelected}
        coinTarget={buyState.buyCoinTarget}
        onChange={handleChangeBuyState}
        newBalance={newBalance}
      />
      <ModalFooter>
        <Button outlined onClick={onClose}>
          Cancelar
        </Button>
        <Button disabled={isSubmitDisabled} onClick={handleSubmit}>
          Confirmar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalTransaction;
