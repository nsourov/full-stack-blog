import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

import DocCard from '../DocCard';

const FormControlDoc = () => {
  const [color, setColor] = useState('#563d7c');
  return (
    <DocCard title="form controls" id="formControls">
      {/** base example */}
      <Form>
        <FormGroup className="mb-2">
          <Label htmlFor="emailAddress" className="form-label">
            Email address
          </Label>
          <Input
            type="email"
            name="email"
            id="emailAddress"
            placeholder="name@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="controlTextArea" className="form-label">
            Text Area
          </Label>
          <Input
            type="textarea"
            id="controlTextArea"
            placeholder="You can write your opinion here"
          />
        </FormGroup>
      </Form>
      <hr />
      {/** sizing of input */}
      <Input
        type="text"
        placeholder="Large Input Box For Writing Text"
        bsSize="lg"
        className="mb-2"
      />
      <Input
        type="text"
        placeholder="Default Input Box For Writing Text"
        className="mb-2"
      />
      <Input
        type="text"
        placeholder="Small Input Box For Writing Text"
        bsSize="sm"
      />
      <hr />
      {/** disabled and readonly input */}
      <Input
        type="text"
        placeholder="Disabled input"
        className="mb-2"
        disabled
      />
      <Input
        type="text"
        placeholder="Disabled readonly input"
        disabled
        readOnly
      />
      <hr />
      {/** file input */}
      <Form>
        <FormGroup className="mb-2">
          <Label for="DefaultFormFile" className="form-label">
            Default file input example
          </Label>
          <input className="form-control" type="file" id="DefaultFormFile" />
        </FormGroup>
        <FormGroup className="mb-2">
          <Label for="MultiFormFile" className="form-label">
            Multiple file input example
          </Label>
          <input
            className="form-control"
            type="file"
            id="MultiFormFile"
            multiple
          />
        </FormGroup>
        <FormGroup className="mb-2">
          <Label for="DisableFormFile" className="form-label">
            Disable file input example
          </Label>
          <input
            className="form-control"
            type="file"
            id="DisableFormFile"
            disabled
          />
        </FormGroup>
        <FormGroup className="mb-2">
          <Label for="SmallFormFile" className="form-label">
            Small file input example
          </Label>
          <input
            className="form-control form-control-sm"
            type="file"
            id="SmallFormFile"
            multiple
          />
        </FormGroup>
        <FormGroup className="mb-2">
          <Label for="LargeFormFile" className="form-label">
            Large file input example
          </Label>
          <input
            className="form-control form-control-lg"
            type="file"
            id="LargeFormFile"
            multiple
          />
        </FormGroup>
      </Form>
      <hr />
      {/** color picker input */}
      <Label for="exampleColorInput" className="form-label">
        Color picker
      </Label>
      <Input
        onChange={(e) => setColor(e.target.value)}
        type="color"
        className="form-control-color"
        id="exampleColorInput"
        value={color}
        title="Choose your color"
      ></Input>
      <hr />
      {/** datalist */}
      <Label htmlFor="exampleDataList" className="form-label">
        Datalist example
      </Label>
      <Input
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
      </datalist>
    </DocCard>
  );
};

export default FormControlDoc;
