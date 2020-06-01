// @flow
import axios from 'axios';
// Configs
import config from '~/config';

const ApiCoins = (): Promise<Object> => axios.get(`${config.APIURL}/coins`);

export { ApiCoins };
