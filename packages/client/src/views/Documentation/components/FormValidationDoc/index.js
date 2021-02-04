import React from 'react';
import { Button, Col, Form, FormFeedback, Input, Label } from 'reactstrap';

import DocCard from '../DocCard';

const FormValidation = () => {
  return (
    <DocCard title="form validation" id="formValidation">
      {/** custom styles validation */}
      <Form
        onSubmit={(e) => e.preventDefault()}
        className="row g-3 needs-validation"
        noValidate
      >
        <Col md={4}>
          <Label htmlFor="validationCustom01" className="form-label">
            First name
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="text"
            id="validationCustom01"
            value="Mark"
            required
            valid
          />
          <FormFeedback valid>Looks good!</FormFeedback>
        </Col>
        <Col md={4}>
          <Label htmlFor="validationCustom02" className="form-label">
            Last name
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="text"
            id="validationCustom02"
            value="Otto"
            required
            valid
          />
          <FormFeedback valid>Looks good!</FormFeedback>
        </Col>
        <Col md={4}>
          <Label htmlFor="validationCustomUsername" className="form-label">
            Username
          </Label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <Input
              onChange={(e) => e.preventDefault()}
              type="text"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              invalid
            />
            <FormFeedback invalid="true">
              Please choose a username.
            </FormFeedback>
          </div>
        </Col>
        <Col md={6}>
          <Label htmlFor="validationCustom03" className="form-label">
            City
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="text"
            id="validationCustom03"
            required
            invalid
          />
          <FormFeedback invalid="true">
            Please provide a valid city.
          </FormFeedback>
        </Col>
        <Col md={3}>
          <Label htmlFor="validationCustom04" className="form-label">
            State
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="select"
            className="form-select"
            id="validationCustom04"
            required
            invalid
          >
            <option defaultValue disabled value="">
              Choose...
            </option>
            <option>...</option>
          </Input>
          <FormFeedback invalid="true">
            Please select a valid state.
          </FormFeedback>
        </Col>
        <Col md={3}>
          <Label htmlFor="validationCustom05" className="form-label">
            Zip
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="text"
            id="validationCustom05"
            required
            invalid
          />
          <FormFeedback invalid="true">
            Please provide a valid zip.
          </FormFeedback>
        </Col>
        <Col md={12}>
          <div className="form-check">
            <Input
              onChange={(e) => e.preventDefault()}
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
              invalid
            />
            <Label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </Label>
            <FormFeedback invalid="true">
              You must agree before submitting.
            </FormFeedback>
          </div>
        </Col>
        <Col md={12}>
          <Button
            color="primary"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Submit form
          </Button>
        </Col>
      </Form>
      <hr />
      {/** with tooltips validation */}
      <Form
        onSubmit={(e) => e.preventDefault()}
        className="row g-3 needs-validation"
        noValidate
      >
        <Col md={4} className="position-relative">
          <Label htmlFor="validationTooltip01" className="form-label">
            First name
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="text"
            id="validationTooltip01"
            value="Mark"
            required
            valid
          />
          <FormFeedback valid tooltip>
            Looks good!
          </FormFeedback>
        </Col>
        <Col md={4} className="position-relative">
          <Label htmlFor="validationTooltip02" className="form-label">
            Last name
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="text"
            id="validationTooltip02"
            value="Otto"
            required
            valid
          />
          <FormFeedback valid tooltip>
            Looks good!
          </FormFeedback>
        </Col>
        <Col md={4} className="position-relative">
          <Label htmlFor="validationTooltipUsername" className="form-label">
            Username
          </Label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              @
            </span>
            <Input
              onChange={(e) => e.preventDefault()}
              type="text"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              required
              invalid
            />
            <FormFeedback tooltip>
              Please choose a unique and valid username.
            </FormFeedback>
          </div>
        </Col>
        <Col md={6} className="position-relative">
          <Label htmlFor="validationTooltip03" className="form-label">
            City
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="text"
            id="validationTooltip03"
            required
            invalid
          />
          <FormFeedback tooltip>Please provide a valid city.</FormFeedback>
        </Col>
        <Col md={3} className="position-relative">
          <Label htmlFor="validationTooltip04" className="form-label">
            State
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="select"
            className="form-select"
            id="validationTooltip04"
            required
            invalid
          >
            <option defaultValue disabled value="">
              Choose...
            </option>
            <option>...</option>
          </Input>
          <FormFeedback tooltip>Please select a valid state.</FormFeedback>
        </Col>
        <Col md={3} className="position-relative">
          <Label htmlFor="validationTooltip05" className="form-label">
            Zip
          </Label>
          <Input
            onChange={(e) => e.preventDefault()}
            type="text"
            id="validationTooltip05"
            required
            invalid
          />
          <FormFeedback tooltip>Please provide a valid zip.</FormFeedback>
        </Col>
        <Col md={12}>
          <Button
            color="primary"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Submit form
          </Button>
        </Col>
      </Form>
    </DocCard>
  );
};

export default FormValidation;
