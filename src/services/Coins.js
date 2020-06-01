import { ApiCoins } from '~/api';
import { Storage } from '~/services';

async function getCoins(): Object {
  try {
    const { data } = await ApiCoins();
    const { bitcoin = {}, brita = {} } = data;
    return { btc: bitcoin.compra || 0, brita: brita.compra || 0 };
  } catch (error) {
    const coinsFromStorage = Storage.getCoins();
    if (coinsFromStorage) {
      const { bitcoin = {}, brita = {} } = coinsFromStorage;
      return { btc: bitcoin.compra || 0, brita: brita.compra || 0 };
    }
    return { btc: 0, brita: 0 };
  }
}

function getBalances() {
  const balances = Storage.getSessionBalance();
  return balances;
}

function getTransactions() {
  const transactions = Storage.getSessionTransactions();
  return transactions;
}

function setNewTransaction(value) {
  return Storage.setSessionTransactions(value);
}

export {
  getCoins, getBalances, getTransactions, setNewTransaction,
};
