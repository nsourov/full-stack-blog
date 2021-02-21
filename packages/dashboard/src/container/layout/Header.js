import React from 'react';
import { Layout, Button, Row, Col } from 'antd';

const { Header } = Layout;

const Header = (props) => {
  return (
    <>
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
                <Link className='btn-search' onClick={handleSearchHide} to='#'>
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
    </>
  );
};

export default Header;
