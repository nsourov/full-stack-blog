import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import DocCard from '../DocCard';

const TabsDoc = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [pillsTab, setPillsTab] = useState('pills1');
  const [verticalTab, setVerticalTab] = useState('vertical1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const pillsTabToggle = (tab) => {
    if (pillsTab !== tab) setPillsTab(tab);
  };

  const verticalTabToggle = (tab) => {
    if (verticalTab !== tab) setVerticalTab(tab);
  };

  return (
    <DocCard title="tabs" id="tabs">
      {/** base tabs */}
      <Nav tabs>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      {/** pills tabs */}
      <Nav pills>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: pillsTab === 'pills1' })}
            onClick={() => {
              pillsTabToggle('pills1');
            }}
          >
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: pillsTab === 'pills2' })}
            onClick={() => {
              pillsTabToggle('pills2');
            }}
          >
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: pillsTab === 'pills3' })}
            onClick={() => {
              pillsTabToggle('pills3');
            }}
          >
            Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      {/** vertical pills tabs */}
      <Nav pills vertical>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: verticalTab === 'vertical1' })}
            onClick={() => {
              verticalTabToggle('vertical1');
            }}
          >
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: verticalTab === 'vertical2' })}
            onClick={() => {
              verticalTabToggle('vertical2');
            }}
          >
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: verticalTab === 'vertical3' })}
            onClick={() => {
              verticalTabToggle('vertical3');
            }}
          >
            Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    </DocCard>
  );
};

export default TabsDoc;
