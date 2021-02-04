import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Collapse,
  UncontrolledCollapse,
} from 'reactstrap';

import DocCard from '../DocCard';

const CollapseDoc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <DocCard title="collapse" id="collapse">
      {/** base collapse */}
      <div>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: '1rem' }}
        >
          Toggle
        </Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <hr />
      {/** uncontrolled collapse */}
      <div>
        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
          Toggle
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              magni, voluptas debitis similique porro a molestias consequuntur
              earum odio officiis natus, amet hic, iste sed dignissimos esse
              fuga! Minus, alias.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </DocCard>
  );
};

export default CollapseDoc;
