import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { VendorProfiles } from '../../api/vendor/vendorProfile';
import { UserProfiles } from '../../api/user/userProfile';
import VendorItemAdmin from '../components/VendorItemAdmin';
import UserAdmin from '../components/UserAdmin';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListStuffAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, vendors, users } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(VendorProfiles.adminPublicationName);
    const subscription2 = Meteor.subscribe(UserProfiles.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready() && subscription2.ready();
    // Get the Stuff documents
    const vendorItems = VendorProfiles.collection.find({}).fetch();
    const UserItems = UserProfiles.collection.find({}).fetch();
    return {
      users: UserItems,
      vendors: vendorItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3" id="list-admin-page">
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
              {vendors.map((vendor) => <VendorItemAdmin key={vendor._id} vendor={vendor} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12}>
          <Col className="text-center">
            <h2>Profile Info</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th colSpan="5">Ethnicity</th>
                <th colSpan="4">Diet</th>
              </tr>
              <tr>
                <th> </th>
                <th>Asian</th>
                <th>American</th>
                <th>European</th>
                <th>Hawaiian</th>
                <th>Hispanic</th>
                <th>Omnivore</th>
                <th>Vegan</th>
                <th>Vegetarian</th>
                <th>Gluten Free</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => <UserAdmin key={user._id} user={user} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStuffAdmin;
