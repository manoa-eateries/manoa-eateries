import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Container className="px-5">
        <h1>Manoa Eateries</h1>
        <p>Manoa Eateries gives students the opportunity to see what is available to eat on campus.  Users can view various food options based on their preferences, and vendors can update their menu items and operating house.</p>
        <h3>PARTICIPATING VENDORS</h3>
        <p>Dunkin' Donuts, Holoholo Grill, L&L Hawaiian Barbecue, Le Crepe Cafe, Lasoon, Panda Express, Ahi & Vegetable, Happy Belly Eatery, HI Cravings, Holoholo Bistro, Raysam Hawaii, Slice By HB Baking, The Bean Counter, Bale, Campus Center Food Court, Gateway Cafe, Hale Aloha Cafe, Jamba Juice, Starbucks, B'RITO, The Market.</p>
      </Container>
    </Row>
  </Container>
);

export default Landing;
