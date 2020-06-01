const ENV = process.env.REACT_APP_BUILD_ENV || 'local';

const envs = {
  prd: {
    apiUrl: 'https://mvf-api-coins.herokuapp.com',
    coins: 'prd:vw@coins',
    balance: 'prd:vw@balance',
    historic: 'prd:vw@historic',
  },
  local: {
    apiUrl: 'http://localhost:5000',
    coins: 'dev:vw@coins',
    balance: 'dev:vw@balance',
    historic: 'dev:vw@historic',
  },
};

export default {
  APIURL: envs[ENV].apiUrl,
  COIN_KEY: envs[ENV].coins,
  TRANSACTIONS_KEY: envs[ENV].historic,
  BALANCE_KEY: envs[ENV].balance,
};
