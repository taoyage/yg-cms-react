import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const { SubMenu } = Menu;
const { Sider } = Layout;

const YgSider = () => {
  return (
    <Sider className="yg-sider">
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
        <Menu.Item key="1">
          <Link className="sider-link" to="/user">
            用户管理
          </Link>
        </Menu.Item>
        <SubMenu key="sub1" title="权限管理">
          <Menu.Item key="2">
            <Link className="sider-link" to="/user">
              角色列表
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default YgSider;
