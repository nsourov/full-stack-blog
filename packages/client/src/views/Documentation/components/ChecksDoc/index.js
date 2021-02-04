import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import DocCard from '../DocCard';

const ChecksDoc = () => {
  return (
    <DocCard title="checks" id="checks">
      {/** base checkbox */}
      <FormGroup check>
        <Input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <Label className="form-check-label" for="flexCheckDefault">
          Default checkbox
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          onChange={(e) => e.preventDefault()}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          defaultChecked
        />
        <Label className="form-check-label" for="flexCheckChecked">
          Checked checkbox
        </Label>
      </FormGroup>
      <hr />
      {/** indetermine checkbox */}
      <FormGroup check>
        <Input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckIndeterminate"
        />
        <Label className="form-check-label" for="flexCheckIndeterminate">
          Indeterminate checkbox
        </Label>
      </FormGroup>
      <hr />
      {/** disabled checkbox */}
      <FormGroup check>
        <Input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDisabled"
          disabled
        />
        <Label className="form-check-label" for="flexCheckDisabled">
          Disabled checkbox
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          onChange={(e) => e.preventDefault()}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckCheckedDisabled"
          defaultChecked
          disabled
        />
        <Label className="form-check-label" for="flexCheckCheckedDisabled">
          Disabled checked checkbox
        </Label>
      </FormGroup>
      <hr />
      {/** inline checkbox */}
      <FormGroup className="form-check-inline" check>
        <Input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <Label className="form-check-label" for="inlineCheckbox1">
          1
        </Label>
      </FormGroup>
      <FormGroup className="form-check-inline" check>
        <Input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <Label className="form-check-label" for="inlineCheckbox2">
          2
        </Label>
      </FormGroup>
      <FormGroup className="form-check-inline" check>
        <Input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="option3"
          disabled
        />
        <Label className="form-check-label" for="inlineCheckbox3">
          3 (disabled)
        </Label>
      </FormGroup>
      <hr />
      {/** toggle button of checkbox */}
      <Input
        type="checkbox"
        className="btn-check me-2"
        id="btn-check"
        autoComplete="true"
      />
      <Label className="btn btn-primary me-2" for="btn-check">
        Single toggle
      </Label>
      <Input
        onChange={(e) => e.preventDefault()}
        type="checkbox"
        className="btn-check"
        id="btn-check-2"
        defaultChecked
        autoComplete="true"
      />
      <Label className="btn btn-primary me-2" for="btn-check-2">
        Checked
      </Label>
      <Input
        type="checkbox"
        className="btn-check"
        id="btn-check-3"
        autoComplete="true"
        disabled
      />
      <Label className="btn btn-primary me-2" for="btn-check-3">
        Disabled
      </Label>
    </DocCard>
  );
};

export default ChecksDoc;
