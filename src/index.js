import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Styles from '~/styles';
import Home from './containers/home';

const root: ?Element = document.getElementById('root');

if (root != null) {
  render(
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
      <Styles />
    </>,
    root,
  );
}
