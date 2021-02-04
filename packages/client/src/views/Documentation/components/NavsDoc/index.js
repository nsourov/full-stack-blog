import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import DocCard from '../DocCard';

const NavsDoc = () => {
  return (
    <DocCard title="navs" id="navs">
      {/** list based nav */}
      <Nav>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      {/** link based nav */}
      <Nav>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{' '}
        <NavLink href="#">Another Link</NavLink>{' '}
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </Nav>
      <hr />
      {/** vertical nav */}
      <Nav vertical>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{' '}
        <NavLink href="#">Another Link</NavLink>{' '}
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </Nav>
    </DocCard>
  );
};

export default NavsDoc;
