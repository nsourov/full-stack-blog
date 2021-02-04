import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

import DocCard from '../DocCard';

const ButtonGroupDoc = () => {
  return (
    <DocCard title="button group" id="buttonGroup">
      {/** normal buttonGroup */}
      <ButtonGroup>
        <Button color="primary">Left</Button>
        <Button color="primary">Middle</Button>
        <Button color="primary">Right</Button>
      </ButtonGroup>

      <hr />

      {/** link buttonGroup */}
      <div className="btn-group">
        <a href="#" className="btn btn-primary active" aria-current="page">
          Active link
        </a>
        <a href="#" className="btn btn-primary">
          Link
        </a>
        <a href="#" className="btn btn-primary">
          Link
        </a>
      </div>

      <hr />

      {/** mixed buttonGroup */}
      <ButtonGroup>
        <Button color="danger">Left</Button>
        <Button color="warning">Middle</Button>
        <Button color="success">Right</Button>
      </ButtonGroup>

      <hr />

      {/** outline buttonGroup */}
      <ButtonGroup>
        <Button color="info" outline>
          Left
        </Button>
        <Button color="info" outline>
          Middle
        </Button>
        <Button color="info" outline>
          Right
        </Button>
      </ButtonGroup>

      <hr />

      {/** toolbar buttonGroup */}
      <ButtonToolbar>
        <ButtonGroup className="ms-2">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup className="ms-2">
          <Button color="info">5</Button>
          <Button color="info">6</Button>
          <Button color="info">7</Button>
        </ButtonGroup>
        <ButtonGroup className="ms-2">
          <Button color="warning">8</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <hr />

      {/** sizing of buttonGroup */}
      <ButtonGroup size="lg" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <hr />

      {/** vertical buttonGroup */}
      <ButtonGroup vertical>
        <Button color="danger">Left</Button>
        <Button color="warning">Middle</Button>
        <Button color="success">Right</Button>
      </ButtonGroup>
    </DocCard>
  );
};

export default ButtonGroupDoc;
