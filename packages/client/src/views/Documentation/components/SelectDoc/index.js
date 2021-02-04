import React from 'react';
import { Input } from 'reactstrap';

import DocCard from '../DocCard';

const SelectDoc = () => {
  return (
    <DocCard title="select" id="select">
      {/** base select */}
      <Input type="select" name="select" className="form-select">
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Input>
      <hr />
      {/** sizing of select */}
      <Input
        type="select"
        name="select"
        className="form-select form-select-lg mb-2"
      >
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Input>
      <Input type="select" name="select" className="form-select form-select-sm">
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Input>
      <hr />
      {/** multiple attribute of select */}
      <Input type="select" name="select" className="form-select" multiple>
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Input>
      <hr />
      {/** disabled select */}
      <Input type="select" name="select" className="form-select" disabled>
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Input>
    </DocCard>
  );
};

export default SelectDoc;
