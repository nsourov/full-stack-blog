import React, { useState } from 'react';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
} from 'reactstrap';

import DocCard from '../DocCard';

const InputGroupDoc = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  return (
    <DocCard title="input group" id="inputGroup">
      {/** base inputGroup */}
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText className="h-100">
            <Input
              addon
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupAddon addonType="append">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <hr />
      {/** wrapping of inputGroup */}
      <InputGroup className="flex-nowrap">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <hr />
      {/** size of inputGroup */}
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Small
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Default
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          Large
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <hr />
      {/** checkboxes and radios */}
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            aria-label="Radio button for following text input"
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
        />
      </div>

      <div className="input-group">
        <div className="input-group-text">
          <input
            className="form-check-input"
            type="radio"
            value=""
            aria-label="Radio button for following text input"
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
        />
      </div>
      <hr />
      {/** multiple inputGroup */}
      <div className="input-group">
        <span className="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" className="form-control" />
        <input type="text" aria-label="Last name" className="form-control" />
      </div>
      <hr />
      {/** multiple addons */}
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
        <input
          type="text"
          className="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
      </div>
      <hr />
      {/** button addons */}
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Button
        </button>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>

      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with two button addons"
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
      <hr />
      {/** buttons with dropdowns */}
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button>I'm a button</Button>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButtonDropdown
          addonType="append"
          isOpen={dropdownOpen}
          toggle={toggleDropDown}
        >
          <DropdownToggle caret>Button Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButtonDropdown
          addonType="prepend"
          isOpen={splitButtonOpen}
          toggle={toggleSplit}
        >
          <Button outline>Split Button</Button>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append">
          <Button color="secondary">I'm a button</Button>
        </InputGroupAddon>
      </InputGroup>
      <hr />
      {/** custom file input */}
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">
          Upload
        </label>
        <input type="file" className="form-control" id="inputGroupFile01" />
      </div>

      <div className="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02" />
        <label className="input-group-text" htmlFor="inputGroupFile02">
          Upload
        </label>
      </div>

      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon03"
        >
          Button
        </button>
        <input
          type="file"
          className="form-control"
          id="inputGroupFile03"
          aria-describedby="inputGroupFileAddon03"
          aria-label="Upload"
        />
      </div>

      <div className="input-group">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
        >
          Button
        </button>
      </div>
    </DocCard>
  );
};

export default InputGroupDoc;
