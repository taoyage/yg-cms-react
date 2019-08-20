import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import './index.scss';

const { Content } = Layout;

const YgContent = ({ children }) => {
  return <Content className="yg-content">{children}</Content>;
};

YgContent.propTypes = {
  children: PropTypes.element.isRequired
};

export default YgContent;
