import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import DocCard from '../DocCard';

const SwitchesDoc = () => {
  return (
    <DocCard title="switch" id="switch">
      {/** base switches */}
      <FormGroup className="form-switch" check>
        <Input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <Label className="form-check-label" for="flexSwitchCheckDefault">
          Default switch checkbox input
        </Label>
      </FormGroup>
      <FormGroup className="form-switch">
        <Input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          defaultChecked
        />
        <Label className="form-check-label" for="flexSwitchCheckChecked">
          Checked switch checkbox input
        </Label>
      </FormGroup>
      <FormGroup className="form-switch">
        <Input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDisabled"
          disabled
        />
        <Label className="form-check-label" for="flexSwitchCheckDisabled">
          Disabled switch checkbox input
        </Label>
      </FormGroup>
      <FormGroup className="form-switch">
        <Input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckCheckedDisabled"
          defaultChecked
          disabled
        />
        <Label
          className="form-check-label"
          for="flexSwitchCheckCheckedDisabled"
        >
          Disabled checked switch checkbox input
        </Label>
      </FormGroup>
    </DocCard>
  );
};

export default SwitchesDoc;
