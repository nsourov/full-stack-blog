import React from 'react';
import { Button, Spinner } from 'reactstrap';

import DocCard from '../DocCard';

const SpinnersDoc = () => {
  return (
    <DocCard title="spinners" id="spinners">
      {/** border spinners */}
      <div>
        <Spinner color="primary" children={''} className="me-2" />
        <Spinner color="secondary" children={''} className="me-2" />
        <Spinner color="success" children={''} className="me-2" />
        <Spinner color="danger" children={''} className="me-2" />
        <Spinner color="warning" children={''} className="me-2" />
        <Spinner color="info" children={''} className="me-2" />
        <Spinner color="light" children={''} className="me-2" />
        <Spinner color="dark" children={''} className="me-2" />
      </div>
      <hr />
      {/** growing spinners */}
      <div>
        <Spinner type="grow" color="primary" children={''} className="me-2" />
        <Spinner type="grow" color="secondary" children={''} className="me-2" />
        <Spinner type="grow" color="success" children={''} className="me-2" />
        <Spinner type="grow" color="danger" children={''} className="me-2" />
        <Spinner type="grow" color="warning" children={''} className="me-2" />
        <Spinner type="grow" color="info" children={''} className="me-2" />
        <Spinner type="grow" color="light" children={''} className="me-2" />
        <Spinner type="grow" color="dark" children={''} className="me-2" />
      </div>
      <hr />
      {/** sizes of spinners */}
      <div className="large-spinners mb-2">
        <Spinner
          color="primary"
          children={''}
          style={{ width: '3rem', height: '3rem' }}
          className="me-2"
        />
        <Spinner
          type="grow"
          color="danger"
          children={''}
          style={{ width: '3rem', height: '3rem' }}
        />
      </div>
      <div className="default-spinners mb-2">
        <Spinner color="primary" children={''} className="me-2" />
        <Spinner type="grow" color="danger" children={''} />
      </div>
      <div className="small-spinners">
        <Spinner color="primary" children={''} size="sm" className="me-2" />
        <Spinner type="grow" color="danger" children={''} size="sm" />
      </div>
      <hr />
      {/** with button spinners */}
      <Button color="primary" className="me-2">
        <Spinner children={''} />
      </Button>
      <Button color="primary" disabled>
        <Spinner children={''} size="sm" className="me-2" />
        Loading...
      </Button>
      <hr />
      <Button color="primary" className="me-2">
        <Spinner type="grow" children={''} />
      </Button>
      <Button color="primary" disabled>
        <Spinner type="grow" children={''} size="sm" className="me-2" />
        Loading...
      </Button>
    </DocCard>
  );
};

export default SpinnersDoc;
