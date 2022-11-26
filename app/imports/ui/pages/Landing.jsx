import React from 'react';
import { Container, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row id="landing-text" className="align-middle text-center">
      <Container className="px-5">
        <h1>Manoa Eateries</h1>
        <p>Manoa Eateries gives students the opportunity to see what is available to eat on campus.  Users can view various food options based on their preferences, and vendors can update their menu items and operating house.</p>
      </Container>
    </Row>
  </Container>
);

export default Landing;
