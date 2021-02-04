import React from 'react';
import { Alert } from 'reactstrap';

import DocCard from '../DocCard';

const AlertDoc = () => {
  return (
    <DocCard title="alert" id="alert">
      {/** base alert */}
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <Alert color="secondary">This is a primary alert — check it out!</Alert>
      <Alert color="success">This is a primary alert — check it out!</Alert>
      <Alert color="danger">This is a primary alert — check it out!</Alert>
      <Alert color="info">This is a primary alert — check it out!</Alert>
      <Alert color="light">This is a primary alert — check it out!</Alert>
      <Alert color="dark">This is a primary alert — check it out!</Alert>
      <hr />
      {/** link with alert */}
      <Alert color="primary">
        This is a primary alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <Alert color="secondary">
        This is a secondary alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <Alert color="success">
        This is a success alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <Alert color="danger">
        This is a danger alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <Alert color="warning">
        This is a warning alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <Alert color="info">
        This is a info alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <Alert color="light">
        This is a light alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <Alert color="dark">
        This is a dark alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <hr />
      {/** with additional content alert */}
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    </DocCard>
  );
};

export default AlertDoc;
