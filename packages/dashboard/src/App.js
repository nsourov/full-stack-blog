import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';

import './static/css/style.css';

import config from './config/config';
import App from './views/App';

const { theme } = config;

const ProviderConfig = () => {
  return (
    <ConfigProvider direction='ltr'>
      <ThemeProvider theme={{ ...theme, topMenu: true, darkMode: true }}>
        <App />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default ProviderConfig;
