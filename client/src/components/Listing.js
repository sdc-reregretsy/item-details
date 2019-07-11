import React from "react";
import Title from "./Title.js";
import Details from "./Details.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="listingColumn">
      <Container>
        <Row>
          <Col md={8}>
            <Image src="https://i.etsystatic.com/19866202/r/il/9db3c0/1981665817/il_fullxfull.1981665817_mjym.jpg" fluid />
          </Col>
          <Col md={4}>
            <Title />
            <Details />
          </Col>
        </Row>
      </Container>
    </div>;
  }
}
export default Listing;
