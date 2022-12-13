import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { VendorProfiles } from '../../api/vendor/vendorProfile';
import VendorItem from '../components/VendorItem';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListVendorProfiles = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, vendors } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(VendorProfiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const vendorItems = VendorProfiles.collection.find({}).fetch();
    return {
      vendors: vendorItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3" id="list-vendor-profiles-page">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Vendor Profiles</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Vendor Name</th>
                <th>Logo</th>
                <th>Open Days</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => <VendorItem key={vendor._id} vendor={vendor} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListVendorProfiles;
