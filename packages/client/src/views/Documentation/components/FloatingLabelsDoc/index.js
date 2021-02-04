import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

import DocCard from '../DocCard';

const FloatingLabelsDoc = () => {
  return (
    <DocCard title="floating labels" id="floatingLabels">
      {/** base floatingLabels */}
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormGroup className="form-floating mb-3">
          <Input
            type="email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <Label htmlFor="floatingInput">Email address</Label>
        </FormGroup>
        <FormGroup className="form-floating">
          <Input type="password" id="floatingPassword" placeholder="Password" />
          <Label htmlFor="floatingPassword">Password</Label>
        </FormGroup>
      </Form>
      <hr />
      {/** input with value floatingLabels */}
      <Form onSubmit={(e) => e.preventDefault()} className="form-floating">
        <Input
          onChange={(e) => e.preventDefault()}
          type="email"
          id="floatingInputValue"
          placeholder="name@example.com"
          value="test@example.com"
        />
        <Label htmlFor="floatingInputValue">Input with value</Label>
      </Form>
      <hr />
      {/** form validation work with input value floatingLabels */}
      <Form onSubmit={(e) => e.preventDefault()} className="form-floating">
        <Input
          onChange={(e) => e.preventDefault()}
          type="email"
          id="floatingInputInvalid"
          placeholder="name@example.com"
          value="test@example.com"
          invalid
        />
        <Label htmlFor="floatingInputInvalid">Invalid input</Label>
      </Form>
      <hr />
      {/** textarea floatingLabels */}
      <Form onSubmit={(e) => e.preventDefault()} className="form-floating">
        <Input
          type="textarea"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: '100px' }}
        />
        <Label htmlFor="floatingTextarea2">Comments</Label>
      </Form>
      <hr />
      {/** select floatingLabels */}
      <Form onSubmit={(e) => e.preventDefault()} className="form-floating">
        <Input
          type="select"
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Input>
        <Label htmlFor="floatingSelect">Works with selects</Label>
      </Form>
    </DocCard>
  );
};

export default FloatingLabelsDoc;
