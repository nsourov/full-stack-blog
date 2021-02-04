import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import AccordionDoc from './components/AccordionDoc';
import AlertDoc from './components/AlertDoc';
import BadgeDoc from './components/BadgeDoc';
import ButtonsDoc from './components/ButtonsDoc';
import ButtonGroupDoc from './components/ButtonGroupDoc';
import BreadcrumbsDoc from './components/BreadcrumbsDoc';
import CardDoc from './components/CardDoc';
import ChecksDoc from './components/ChecksDoc';
import CloseButton from './components/CloseButton';
import CollapseDoc from './components/CollapseDoc';
import DropdownDoc from './components/DropdownDoc';
import FormControlDoc from './components/FormControlDoc';
import FormLayoutDoc from './components/FormLayoutDoc';
import FormValidation from './components/FormValidationDoc';
import FloatingLabelsDoc from './components/FloatingLabelsDoc';
import InputGroupDoc from './components/InputGroupDoc';
import ListGroupDoc from './components/ListGroupDoc';
import ModalDoc from './components/ModalDoc';
import NavbarDoc from './components/NavbarDoc';
import NavsDoc from './components/NavsDoc';
import PaginationDoc from './components/PaginationDoc';
import ProgressDoc from './components/ProgressDoc';
import PopoversDoc from './components/PopoversDoc';
import RadiosDoc from './components/RadiosDoc';
import RangeDoc from './components/RangeDoc';
import ScrollspyDoc from './components/ScrollspyDoc';
import SelectDoc from './components/SelectDoc';
import SpinnersDoc from './components/SpinnersDoc';
import SwitchesDoc from './components/SwitchesDoc';
import TabsDoc from './components/TabsDoc';
import ToastDoc from './components/ToastDoc';
import TooltipDoc from './components/TooltipDoc';

import './documents.scss';

const leftNav = ['introduction', 'directory', 'structure', 'theme'];
const rightNav = [
  'accordion',
  'alert',
  'badge',
  'buttons',
  'buttonGroup',
  'breadcrumbs',
  'card',
  'checks',
  'closeButton',
  'collapse',
  'dropdown',
  'formControls',
  'formLayout',
  'formValidation',
  'floatingLabels',
  'inputGroup',
  'listGroup',
  'modal',
  'navbar',
  'navs',
  'pagination',
  'popovers',
  'progress',
  'radios',
  'range',
  'scrollspy',
  'select',
  'spinners',
  'switch',
  'tabs',
  'toast',
  'tooltip',
];

const Documentation = () => {
  return (
    <Container fluid>
      <Row className="p-xl-5">
        <Col lg={2}>
          <Sidebar heading="left navigation">
            <Navigation leftNav={leftNav}>{leftNav}</Navigation>
          </Sidebar>
        </Col>
        <Col lg={8}>
          <AccordionDoc />
          <AlertDoc />
          <BadgeDoc />
          <ButtonsDoc />
          <ButtonGroupDoc />
          <BreadcrumbsDoc />
          <CardDoc />
          <ChecksDoc />
          <CloseButton />
          <CollapseDoc />
          <DropdownDoc />
          <FormControlDoc />
          <FormLayoutDoc />
          <FormValidation />
          <FloatingLabelsDoc />
          <InputGroupDoc />
          <ListGroupDoc />
          <ModalDoc />
          <NavbarDoc />
          <NavsDoc />
          <PaginationDoc />
          <PopoversDoc />
          <ProgressDoc />
          <RadiosDoc />
          <RangeDoc />
          <ScrollspyDoc />
          <SelectDoc />
          <SpinnersDoc />
          <SwitchesDoc />
          <TabsDoc />
          <ToastDoc />
          <TooltipDoc />
        </Col>
        <Col lg={2}>
          <Sidebar heading="right navigation">
            <Navigation rightNav={rightNav}>{rightNav}</Navigation>
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentation;
