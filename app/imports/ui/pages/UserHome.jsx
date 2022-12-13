import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { _ } from 'meteor/underscore';
import LoadingSpinner from '../components/LoadingSpinner';
import { VendorProfiles } from '../../api/vendor/vendorProfile';
import VendorCard from '../components/VendorCard';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const UserHome = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { vendors, ready } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(VendorProfiles.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const vendorCards = VendorProfiles.collection.find({}).fetch();
    return {
      vendors: vendorCards,
      ready: rdy,
    };
  }, []);
  let now = new Date();
  now = now.getHours();
  let selectVendors = _.filter(vendors, function (vendor) { return now > vendor.openHour && now < vendor.closeHour; });
  selectVendors = _.sample(selectVendors, 3);
  return (ready ? (
    <Container className="py-3" id="list-vendors-page">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Your Top Picks</h2>
          </Col>
          <Row>
            {selectVendors.map((vendor) => (<Col key={vendor._id}><VendorCard vendor={vendor} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default UserHome;
