import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import DocCard from '../DocCard';

const RadiosDoc = () => {
  return (
    <DocCard title="radios" id="radios">
      {/** base radio */}
      <FormGroup check>
        <Input
          className="form-check-input"
          type="radio"
          value=""
          id="flexCheckDefault"
        />
        <Label className="form-check-label" for="flexCheckDefault">
          Default radio
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          onChange={(e) => e.preventDefault()}
          className="form-check-input"
          type="radio"
          value=""
          id="flexCheckChecked"
          defaultChecked
        />
        <Label className="form-check-label" for="flexCheckChecked">
          Checked radio
        </Label>
      </FormGroup>
      <hr />
      {/** disabled radio */}
      <FormGroup check>
        <Input
          className="form-check-input"
          type="radio"
          value=""
          id="flexCheckDisabled"
          disabled
        />
        <Label className="form-check-label" for="flexCheckDisabled">
          Disabled radio
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          onChange={(e) => e.preventDefault()}
          className="form-check-input"
          type="radio"
          value=""
          id="flexCheckCheckedDisabled"
          defaultChecked
          disabled
        />
        <Label className="form-check-label" for="flexCheckCheckedDisabled">
          Disabled checked radio
        </Label>
      </FormGroup>
      <hr />
      {/** inline radio */}
      <FormGroup className="form-check-inline" check>
        <Input
          className="form-check-input"
          type="radio"
          id="inlineradio1"
          value="option1"
        />
        <Label className="form-check-label" for="inlineradio1">
          1
        </Label>
      </FormGroup>
      <FormGroup className="form-check-inline" check>
        <Input
          className="form-check-input"
          type="radio"
          id="inlineradio2"
          value="option2"
        />
        <Label className="form-check-label" for="inlineradio2">
          2
        </Label>
      </FormGroup>
      <FormGroup className="form-check-inline" check>
        <Input
          className="form-check-input"
          type="radio"
          id="inlineradio3"
          value="option3"
          disabled
        />
        <Label className="form-check-label" for="inlineradio3">
          3 (disabled)
        </Label>
      </FormGroup>
      <hr />
      {/** radio toggle buttons */}
      <Input
        type="radio"
        className="btn-check"
        name="options"
        id="option1"
        autoComplete="true"
        defaultChecked
      />
      <Label className="btn btn-secondary me-2" for="option1">
        Checked
      </Label>

      <Input
        type="radio"
        className="btn-check"
        name="options"
        id="option2"
        autoComplete="true"
      />
      <Label className="btn btn-secondary me-2" for="option2">
        Radio
      </Label>

      <Input
        type="radio"
        className="btn-check"
        name="options"
        id="option3"
        autoComplete="true"
        disabled
      />
      <Label className="btn btn-secondary me-2" for="option3">
        Disabled
      </Label>

      <Input
        type="radio"
        className="btn-check"
        name="options"
        id="option4"
        autoComplete="true"
      />
      <Label className="btn btn-secondary me-2" for="option4">
        Radio
      </Label>
    </DocCard>
  );
};

export default RadiosDoc;
