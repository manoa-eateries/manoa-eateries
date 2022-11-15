import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 footer">
    <Container>
      <Row>
        <Col className="text-center">
          Manoa Eateries
          {' '}
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
          {' '}
          <br />
          <a id="footer-link" href="https://manoa-eateries.github.io/">          Manoa Eateries Home Page
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
