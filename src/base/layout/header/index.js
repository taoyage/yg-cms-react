import React, { memo } from 'react';
import { Layout, Dropdown, Icon, Menu } from 'antd';
import './index.scss';

const { Header } = Layout;

const YgHeader = memo(() => {
  const modifyPassword = () => {};

  const logout = () => {
    history.push('/login');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const accountMenu = (
    <div className="yg-header-user-dropdown">
      <div className="yg-header-menu">
        <div onClick={modifyPassword} className="yg-header-menu-item">
          修改密码
        </div>
        <div onClick={logout} className="yg-header-menu-item">
          退出登录
        </div>
      </div>
    </div>
  );

  const helpMenu = (
    <Menu className="yg-header-qrcode">
      <div className="qrcode" />
    </Menu>
  );

  return (
    <Header className="yg-header">
      <div className="yg-header-head">
        <div className="yg-header-head-logo">
          {/* <i className="yg-logo"></i> */}
        </div>
        <div className="yg-header-head-span"></div>
      </div>
      <div className="yg-header-content">
        <div className="yg-header-content-left">
          <div className="product-logo">
            <p className="logo-text"></p>
          </div>
        </div>
      </div>
      <div className="yg-header-tail">
        <div style={{ marginRight: '30px' }}>
          <Dropdown overlay={helpMenu} trigger={['click']} placement="bottomCenter">
            <div className="yg-header-tail-link">
              <span>帮助与反馈</span>
            </div>
          </Dropdown>
        </div>
        <div>
          <Dropdown overlay={accountMenu} trigger={['click']} placement="bottomCenter">
            <div className="yg-header-tail-user">
              <span>
                <Icon type="user" />
                admin_super
              </span>
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
});

export default YgHeader;
