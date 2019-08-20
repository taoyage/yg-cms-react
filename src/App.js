import React, { memo } from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store/store';
import { Header, Sider, Content } from 'base';

const App = memo(props => {
  return (
    <Provider store={store}>
      <LocaleProvider locale={zhCN}>
        <>
          <Header />
          <div className="yg-main">
            <Sider></Sider>
            <Content>{props.children}</Content>
          </div>
        </>
      </LocaleProvider>
    </Provider>
  );
});

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
