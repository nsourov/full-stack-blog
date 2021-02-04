import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import DocCard from '../DocCard';

const CardDoc = () => {
  return (
    <DocCard title="card" id="card">
      {/** base form of card */}
      <Card className="w-25">
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <hr />
      {/** title, subTitle, link with a card body */}
      <Card className="w-25">
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
      <hr />
      {/** listGroup card */}
      <Card className="w-25 border-0">
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        </ListGroup>
      </Card>
      <hr />
      {/** listGroup flush card */}
      <Card className="w-25 border-0">
        <ListGroup flush>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        </ListGroup>
      </Card>
      <hr />
      {/** with header and footer card */}
      <Card className="w-25">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      <hr />
      {/** with blockQuote card */}
      <Card>
        <CardHeader>Quote</CardHeader>
        <CardBody>
          <blockquote className="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CardBody>
      </Card>
      <hr />
      {/** with textAlignment card */}
      <Card className="w-50 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>button</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      <Card className="text-center w-50 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>button</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      <Card className="text-end w-50">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>button</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      <hr />
      {/** sizing of card */}
      <Card className="w-25 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      <Card className="w-50 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      <Card className="w-75 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      <Card className="w-100">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      <hr />
      {/** with navigation card */}
      <Card className="text-center mb-2">
        <CardHeader>
          <Nav tabs className="card-header-tabs">
            <NavItem>
              <NavLink active href="#">
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>button</Button>
        </CardBody>
      </Card>
      <Card className="text-center mb-2">
        <CardHeader>
          <Nav pills className="card-header-pills">
            <NavItem>
              <NavLink active href="#">
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>button</Button>
        </CardBody>
      </Card>
      <hr />
      {/** with image caps card */}
      <Card className="w-25 mb-2">
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card className="w-25">
        <CardBody>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImg
          bottom
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
      </Card>
      <hr />
      {/** with background variant card */}
      <Card inverse color="primary" className="w-25 mb-2 text-white">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card inverse color="secondary" className="w-25 mb-2 text-white">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card inverse color="success" className="w-25 mb-2 text-white">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card inverse color="info" className="w-25 mb-2 text-dark">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card inverse color="warning" className="w-25 mb-2 text-dark">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card inverse color="danger" className="w-25 text-white mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <hr />
      {/** with outline variant card */}
      <Card outline color="primary" className="w-25 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card outline color="secondary" className="w-25 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card outline color="success" className="w-25 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card outline color="info" className="w-25 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card outline color="warning" className="w-25 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card outline color="danger" className="w-25 mb-2">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
    </DocCard>
  );
};

export default CardDoc;
