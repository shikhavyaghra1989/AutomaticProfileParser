import React from 'react';
import {Alert, Navbar, Container, Row, Col} from "react-bootstrap";
import parserimg from './svgs/parser-svg.svg'

function ProfileSubmitted(props) {
    return(
        <Container>
            <Navbar bg="secondary" variant="light">
                  <Container>
                      <Navbar.Brand href="#home">
                        <Row>
                            <Col>
                                <img
                                  alt=""
                                  src={parserimg}
                                  width="100"
                                  height="100"
                                  className="d-inline-block align-top"
                              />
                            </Col>
                            <Col >
                                <div className ="header-css">
                                  <h3 className="heading-size">Smart Automated Profile Filter Engine</h3>
                                 </div>
                            </Col>
                        </Row>
                      </Navbar.Brand>
                  </Container>
            </Navbar>
            <Alert variant="success">
                Your application id is {props.id}.
                Thank you for taking the time to consider opportunities with us.
                We have all of the information we need at this time.
                You will be contacted regarding the next steps if we will found any position that matches your skill set.
            </Alert>
        </Container>
    )
}

export default ProfileSubmitted;