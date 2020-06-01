// @flow
import config from '~/config';

const sessionSet = (key: string, value: any) => sessionStorage.setItem(key, value);
const sessionGet = (key: string) => sessionStorage.getItem(key);
const localSet = (key: string, value: any) => localStorage.setItem(key, value);
const localGet = (key: string) => localStorage.getItem(key);
const saveCoins = (value: Object) => {
  const stringified = JSON.stringify(value);
  localSet(config.COIN_KEY, stringified);
};
const getCoins = (): Object => {
  const coins: any = localGet(config.COIN_KEY);
  return JSON.parse(coins);
};
const setSessionBalance = (value: Object) => {
  const stringifiedBalance = JSON.stringify(value);
  sessionSet(stringifiedBalance);
};
const getSessionBalance = (): Object => {
  const balance: any = sessionGet(config.BALANCE_KEY);
  return JSON.parse(balance);
};
const setSessionTransactions = (value: Object) => {
  console.log('value: ', value);
  const transactionSaved = getSessionTransactions();
  transactionSaved.push(value);
  console.log('transactionSaved: ', transactionSaved);
  const stringifiedTransaction = JSON.stringify(transactionSaved);
  sessionSet(config.TRANSACTIONS_KEY, stringifiedTransaction);
};
const getSessionTransactions = (): Array<Object> => {
  const transactions: any = sessionGet(config.TRANSACTIONS_KEY);
  return JSON.parse(transactions);
};

export {
  sessionGet,
  sessionSet,
  localGet,
  localSet,
  saveCoins,
  getCoins,
  setSessionBalance,
  getSessionBalance,
  setSessionTransactions,
  getSessionTransactions,
};
