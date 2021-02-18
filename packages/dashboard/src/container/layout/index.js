import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Layout, Button, Row, Col } from 'antd';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

import { Div, SmallScreenAuthInfo } from './style';
import Menueitems from './Menueitems';
import AuthInfo from '../../components/utilities/auth-info/info';
import { darkTheme } from '../../config/theme/themeVariables';

const { Header, Sider } = Layout;

const SideBarStyle = {
  margin: '63px 0 0 0',
  padding: '15px 15px 55px 15px',
  overflowY: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  zIndex: 998,
};

const ThemeLayout = (props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [hide, setHide] = useState(true);
  const [searchHide, setSearchHide] = useState(true);

  const renderThumbHorizontal = ({ style, ...props }) => {
    const { ChangeLayoutMode } = props;
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  };

  const renderThumbVertical = ({ style, ...props }) => {
    const { ChangeLayoutMode } = props;
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
      left: '2px',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  };

  const renderView = ({ style, ...props }) => {
    const customStyle = {
      marginRight: 'auto',
      marginLeft: '-17px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  };

  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      right: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div style={thumbStyle} />;
  };

  const toggleCollapsedMobile = () => {
    if (window.innerWidth <= 990) {
      setCollapsed(!collapsed);
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleSearchHide = (e) => {
    e.preventDefault();
    setSearchHide(!searchHide);
    setHide(true);
  };

  const onShowHide = () => {
    setSearchHide(true);
    setHide(!hide);
  };

  return (
    <Div darkMode>
      <Layout className='layout'>
        <Header
          style={{
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
          }}
        >
          <Row>
            <Col lg={4} sm={6} xs={12} className='align-center-v navbar-brand'>
              <Button type='link' onClick={toggleCollapsed}>
                <img
                  src={require(`../../static/img/icon/${
                    collapsed ? 'right.svg' : 'left.svg'
                  }`)}
                  alt='menu'
                />
              </Button>
              <Link
                className={
                  window.innerWidth > 991
                    ? 'striking-logo top-menu'
                    : 'striking-logo'
                }
                to='/admin'
              >
                <img src={require(`../../static/img/logo.png`)} alt='4trollz' />
              </Link>
            </Col>

            <Col lg={14} md={8} sm={0} xs={0}></Col>

            <Col lg={6} md={10} sm={0} xs={0}>
              <AuthInfo />
            </Col>

            <Col md={0} sm={18} xs={12}>
              <>
                <div className='mobile-action'>
                  <Link
                    className='btn-search'
                    onClick={handleSearchHide}
                    to='#'
                  >
                    {searchHide ? (
                      <FeatherIcon icon='search' />
                    ) : (
                      <FeatherIcon icon='x' />
                    )}
                  </Link>
                  <Link className='btn-auth' onClick={onShowHide} to='#'>
                    <FeatherIcon icon='more-vertical' />
                  </Link>
                </div>
              </>
            </Col>
          </Row>
        </Header>
        <div className='header-more'>
          <Row>
            <Col md={0} sm={24} xs={24}>
              <div className='small-screen-headerRight'>
                <SmallScreenAuthInfo hide={hide} darkMode={true}>
                  <AuthInfo rtl={false} />
                </SmallScreenAuthInfo>
              </div>
            </Col>
          </Row>
        </div>
        <Layout>
          <ThemeProvider theme={darkTheme}>
            <Sider
              width={280}
              style={SideBarStyle}
              collapsed={collapsed}
              theme='dark'
            >
              <Scrollbars
                className='custom-scrollbar'
                autoHide
                autoHideTimeout={500}
                autoHideDuration={200}
                renderThumbHorizontal={renderThumbHorizontal}
                renderThumbVertical={renderThumbVertical}
                renderView={renderView}
                renderTrackVertical={renderTrackVertical}
              >
                <Menueitems
                  topMenu={false}
                  toggleCollapsed={toggleCollapsedMobile}
                  darkMode={true}
                />
              </Scrollbars>
            </Sider>
          </ThemeProvider>
          <Layout
            style={{
              marginLeft: collapsed ? '80px' : '280px',
            }}
            className='atbd-main-layout'
          >
            {children}
          </Layout>
        </Layout>
      </Layout>
    </Div>
  );
};

export default ThemeLayout;
