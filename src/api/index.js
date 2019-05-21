// @flow
import axios from 'axios';
// Configs
import config from '~/config';

const ApiCoins = async (): Promise<Object> => {
  try {
    const { data } = await axios.get(`${config.APIURL}/coins`);
    return Promise.resolve(data);
  } catch (error) {
    console.log('error: ', error);
    return Promise.reject(error);
  }
};

export { ApiCoins };
