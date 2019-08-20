import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from './router';
import './styles/base.scss';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#root')
  );
};

render(Router);

if (module.hot) {
  module.hot.accept('./router', () => {
    const NextAppContainer = require('./router').default;
    render(NextAppContainer);
  });
}
