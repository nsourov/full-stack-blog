import React from 'react';
import { Badge, Button } from 'reactstrap';

import DocCard from '../DocCard';

const BadgeDoc = () => {
  return (
    <DocCard title="badge" id="badge">
      {/* badges with headings */}
      <h1>
        Heading <Badge className="bg-primary">New</Badge>
      </h1>
      <h2>
        Heading <Badge className="bg-secondary">New</Badge>
      </h2>
      <h3>
        Heading <Badge className="bg-success">New</Badge>
      </h3>
      <h4>
        Heading <Badge className="bg-danger">New</Badge>
      </h4>
      <h5>
        Heading <Badge className="bg-info">New</Badge>
      </h5>
      <h6>
        Heading <Badge className="bg-dark">New</Badge>
      </h6>

      <hr />

      {/* notification badge */}
      <Button color="info" outline>
        Notifications <Badge className="bg-info">4</Badge>
      </Button>

      <hr />

      {/* normal badges */}
      <Badge className="bg-primary ms-2">New</Badge>
      <Badge className="bg-secondary ms-2">New</Badge>
      <Badge className="bg-success ms-2">New</Badge>
      <Badge className="bg-danger ms-2">New</Badge>
      <Badge className="bg-info ms-2">New</Badge>
      <Badge className="bg-dark ms-2">New</Badge>

      <hr />

      {/* pill badges */}
      <Badge className="bg-primary rounded-pill ms-2">New</Badge>
      <Badge className="bg-secondary rounded-pill ms-2">New</Badge>
      <Badge className="bg-success rounded-pill ms-2">New</Badge>
      <Badge className="bg-danger rounded-pill ms-2">New</Badge>
      <Badge className="bg-info rounded-pill ms-2">New</Badge>
      <Badge className="bg-dark rounded-pill ms-2">New</Badge>
    </DocCard>
  );
};

export default BadgeDoc;
