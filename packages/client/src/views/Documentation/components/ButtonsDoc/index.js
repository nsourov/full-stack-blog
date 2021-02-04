import React from 'react';
import { Button } from 'reactstrap';

import DocCard from '../DocCard';

const ButtonsDoc = () => {
  return (
    <DocCard title="buttons" id="buttons">
      {/* normal buttons */}
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button> <Button color="link">link</Button>
      <hr />
      {/* outline buttons */}
      <Button color="primary" outline>
        primary
      </Button>{' '}
      <Button color="secondary" outline>
        secondary
      </Button>{' '}
      <Button color="success" outline>
        success
      </Button>{' '}
      <Button color="info" outline>
        info
      </Button>{' '}
      <Button color="warning" outline>
        warning
      </Button>{' '}
      <Button color="danger" outline>
        danger
      </Button>
      <hr />
      {/* sizing of buttons */}
      <Button color="primary" size="lg" className="mb-2">
        Large Button
      </Button>
      <br />
      <Button color="primary" className="mb-2">
        Default Button
      </Button>
      <br />
      <Button color="primary" size="sm" className="mb-2">
        Small Button
      </Button>
      <hr />
      {/* active buttons */}
      <Button color="primary" size="lg" active>
        Primary link
      </Button>{' '}
      <Button color="secondary" size="lg" active>
        Link
      </Button>
      <hr />
      {/* disabled buttons */}
      <Button color="primary" size="lg" disabled>
        Primary button
      </Button>{' '}
      <Button color="secondary" size="lg" disabled>
        Button
      </Button>
    </DocCard>
  );
};

export default ButtonsDoc;
