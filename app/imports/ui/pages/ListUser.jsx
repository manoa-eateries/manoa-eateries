import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { UserProfiles } from '../../api/user/userProfile';
import User from '../components/User';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListUser = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, users } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(UserProfiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const userProfiles = UserProfiles.collection.find({}).fetch();
    return {
      users: userProfiles,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3" id="list-user-page">
      <Row className="justify-content-center">
        <Col md={12}>
          <Col className="text-center">
            <h2>My Preferences</h2>
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
              {users.map((user) => <User key={user._id} user={user} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListUser;
