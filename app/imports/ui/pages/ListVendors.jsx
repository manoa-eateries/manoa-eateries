import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { VendorProfiles } from '../../api/vendor/vendorProfile';
import VendorCard from '../components/VendorCard';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListVendors = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, vendors } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(VendorProfiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const vendorCards = VendorProfiles.collection.find({}).fetch();
    return {
      vendors: vendorCards,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>List Vendors</h2>
          </Col>
          <Row>
            {vendors.map((vendor) => (<Col key={vendor._id}><VendorCard vendor={vendor} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListVendors;
