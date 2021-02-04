import React from 'react';
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';

import DocCard from '../DocCard';

const FormLayoutDoc = () => {
  return (
    <DocCard title="form layout" id="formLayout">
      {/** grid layout gutters */}
      <Row className="g-3">
        <Col>
          <Input type="text" placeholder="First name" aria-label="First name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Last name" aria-label="Last name" />
        </Col>
      </Row>
      <hr />
      {/** complex grid layout */}
      <Form>
        <Row className="g-3">
          <Col md={6}>
            <Label htmlFor="inputEmail4" className="form-label">
              Email
            </Label>
            <Input type="email" id="inputEmail4" />
          </Col>
          <Col md={6}>
            <Label htmlFor="inputPassword4" className="form-label">
              Password
            </Label>
            <Input type="password" id="inputPassword4" />
          </Col>
          <Col md={12}>
            <Label htmlFor="inputAddress" className="form-label">
              Address
            </Label>
            <Input type="text" id="inputAddress" placeholder="1234 Main St" />
          </Col>
          <Col md={12}>
            <Label htmlFor="inputAddress2" className="form-label">
              Address 2
            </Label>
            <Input
              type="text"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </Col>
          <Col md={6}>
            <Label htmlFor="inputCity" className="form-label">
              City
            </Label>
            <Input type="text" id="inputCity" />
          </Col>
          <Col md={4}>
            <Label htmlFor="inputState" className="form-label">
              State
            </Label>
            <select id="inputState" className="form-select">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </Col>
          <Col md={2}>
            <Label htmlFor="inputZip" className="form-label">
              Zip
            </Label>
            <Input type="text" id="inputZip" />
          </Col>
          <Col md={12}>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <Label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </Label>
            </div>
          </Col>
          <Col md={12}>
            <Button type="submit" color="primary">
              Sign in
            </Button>
          </Col>
        </Row>
      </Form>
      <hr />
      {/** horizontal form layout */}
      <Form>
        <Row className="mb-3">
          <Col sm={2}>
            <Label htmlFor="inputEmail3" className="col-form-label">
              Email
            </Label>
          </Col>
          <Col sm={10}>
            <Input type="email" id="inputEmail3" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={2}>
            <Label htmlFor="inputPassword3" className="col-form-label">
              Password
            </Label>
          </Col>
          <Col sm={10}>
            <Input type="password" id="inputPassword3" />
          </Col>
        </Row>
        <fieldset className="row mb-3">
          <Col sm={2}>
            <legend className="col-form-label pt-0">Radios</legend>
          </Col>
          <Col sm={10}>
            <div className="form-check">
              <Input
                onChange={(e) => e.preventDefault()}
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="gridRadios1">
                First radio
              </Label>
            </div>
            <div className="form-check">
              <Input
                onChange={(e) => e.preventDefault()}
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <Label className="form-check-label" htmlFor="gridRadios2">
                Second radio
              </Label>
            </div>
            <div className="form-check disabled">
              <Input
                onChange={(e) => e.preventDefault()}
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
                disabled
              />
              <Label className="form-check-label" htmlFor="gridRadios3">
                Third disabled radio
              </Label>
            </div>
          </Col>
        </fieldset>
        <Row className="mb-3">
          <Col sm={{ size: 10, offset: 2 }}>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <Label className="form-check-label" htmlFor="gridCheck1">
                Example checkbox
              </Label>
            </div>
          </Col>
        </Row>
        <Button type="submit" color="primary">
          Sign in
        </Button>
      </Form>
      <hr />
      {/** sizing of layout */}
      <Row className="mb-3">
        <Col sm={2}>
          <Label
            htmlFor="colFormLabelSm"
            className="col-form-label col-form-label-sm"
          >
            Email
          </Label>
        </Col>
        <Col sm={10}>
          <Input
            type="email"
            className="form-control-sm"
            id="colFormLabelSm"
            placeholder="col-form-label-sm"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={2}>
          <Label htmlFor="colFormLabel" className="col-form-label">
            Email
          </Label>
        </Col>
        <Col sm={10}>
          <Input type="email" id="colFormLabel" placeholder="col-form-label" />
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <Label
            htmlFor="colFormLabelLg"
            className="col-form-label col-form-label-lg"
          >
            Email
          </Label>
        </Col>
        <Col sm={10}>
          <Input
            type="email"
            className="form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </Col>
      </Row>
    </DocCard>
  );
};

export default FormLayoutDoc;
