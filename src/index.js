import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Styles from '~/styles';
import App from './App';

const root: ?Element = document.getElementById('root');

if (root != null) {
  render(
    <>
      <BrowserRouter>
        <Route exact path="/" component={App} />
      </BrowserRouter>
      <Styles />
    </>,
    root,
  );
}
