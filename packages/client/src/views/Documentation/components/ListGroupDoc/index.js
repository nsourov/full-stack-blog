import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import DocCard from '../DocCard';

const ListGroupDoc = () => {
  return (
    <DocCard title="list group" id="listGroup">
      {/** normal listGroup */}
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <hr />
      {/** active item listGroup*/}
      <ListGroup>
        <ListGroupItem className="active">Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <hr />
      {/** disabled item listGroup */}
      <ListGroup>
        <ListGroupItem disabled>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>{' '}
      <hr />
      {/** mixed listGroup */}
      <ListGroup>
        <ListGroupItem color="primary">Cras justo odio</ListGroupItem>
        <ListGroupItem color="danger">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="success">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="info">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem color="warning">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <hr />
      {/** flush listGroup */}
      <ListGroup flush>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <hr />
      {/** horizontal listGroup */}
      <ListGroup horizontal>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </DocCard>
  );
};

export default ListGroupDoc;
