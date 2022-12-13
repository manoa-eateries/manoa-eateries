import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row id="landing-text" className="align-middle text-center">
      <Container className="px-4">
        <h1>Manoa Eateries</h1>
        <p>Manoa Eateries gives students the opportunity to see what is available to eat on campus. Users can view various food options based on their preferences, and vendors can update their menu items and operating hours.</p>
        <h3 className="pt-3">Participating Vendors</h3>
        <Row className="p-3">
          <Col><Image className="landing-img pb-3" src="https://1000logos.net/wp-content/uploads/2017/08/Dunkin-Donuts-Logo.png" /> </Col>
          <Col><Image className="landing-img pb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/L%26L_Hawaiian_Barbecue_logo.svg/1042px-L%26L_Hawaiian_Barbecue_logo.svg.png" /> </Col>
          <Col><Image className="landing-img pb-3" src="https://logos-world.net/wp-content/uploads/2022/02/Panda-Express-Emblem.png" /> </Col>
          <Col>
            <Image className="landing-img pb-3" src="https://static.wixstatic.com/media/449d5a_a6be7a604fbf47658c182e48eba92012~mv2_d_2500_2500_s_4_2.png/v1/fit/w_2500,h_1330,al_c/449d5a_a6be7a604fbf47658c182e48eba92012~mv2_d_2500_2500_s_4_2.png" />
          </Col>
          <Col><Image className="landing-img pb-3" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png" /> </Col>
          <Col><Image className="landing-img pb-3" src="https://www.jamba.com/-/media/jamba/site-logos/jamba-logo.jpg?v=1&d=20190608T213113Z" /> </Col>
        </Row>
      </Container>
    </Row>
  </Container>
);

export default Landing;
