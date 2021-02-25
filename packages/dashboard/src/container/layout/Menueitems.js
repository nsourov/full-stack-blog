import React from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { data: user } = useSelector((store) => store.user);
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu
      ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`]
      : []
  );

  const onOpenChange = (keys) => {
    setOpenKeys(
      keys[keys.length - 1] !== 'recharts'
        ? [keys.length && keys[keys.length - 1]]
        : keys
    );
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1
                  ? 'home'
                  : mainPathSplit.length === 2
                  ? mainPathSplit[1]
                  : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={
        !topMenu
          ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`]
          : []
      }
      overflowedIndicator={<FeatherIcon icon='more-vertical' />}
      openKeys={openKeys}
    >
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className='menuItem-iocn' to='/'>
              <FeatherIcon icon='settings' />
            </NavLink>
          )
        }
        key='settings'
      >
        <NavLink onClick={toggleCollapsed} to='/'>
          Profile
        </NavLink>
      </Menu.Item>

      <SubMenu
        key='post'
        icon={!topMenu && <FeatherIcon icon='target' />}
        title='Post'
      >
        <Menu.Item key='views'>
          <NavLink onClick={toggleCollapsed} to='/post/list'>
            Post List
          </NavLink>
        </Menu.Item>
        <Menu.Item key='PostCreate'>
          <NavLink onClick={toggleCollapsed} to='/post/create'>
            Create Post
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {user.role === 'admin' && (
        <>
          <Menu.Item
            icon={
              !topMenu && (
                <NavLink className='menuItem-iocn' to='/users/list'>
                  <FeatherIcon icon='users' />
                </NavLink>
              )
            }
            key='/users/list'
          >
            <NavLink onClick={toggleCollapsed} to='/users/list'>
              Users
            </NavLink>
          </Menu.Item>
          {/* <Menu.Item
            icon={
              !topMenu && (
                <NavLink className='menuItem-iocn' to='/request'>
                  <FeatherIcon icon='user-check' />
                </NavLink>
              )
            }
            key='request'
          >
            <NavLink onClick={toggleCollapsed} to='/request'>
              Request
            </NavLink>
          </Menu.Item> */}
          <Menu.Item
            icon={
              !topMenu && (
                <NavLink className='menuItem-iocn' to='/category'>
                  <FeatherIcon icon='layers' />
                </NavLink>
              )
            }
            key='category'
          >
            <NavLink onClick={toggleCollapsed} to='/category'>
              Category
            </NavLink>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
