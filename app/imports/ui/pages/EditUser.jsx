import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, BoolField, ErrorsField, HiddenField, SubmitField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserProfiles } from '../../api/user/userProfile';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(UserProfiles.schema);

/* Renders the EditStuff page for editing a single document. */
const EditUser = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(UserProfiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = UserProfiles.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { name, owner, Asian, American, European, Hawaiian, Hispanic, Omnivore, Vegan, Vegetarian, GlutenFree } = data;
    UserProfiles.collection.update(_id, { $set: { name, owner, Asian, American, European, Hawaiian, Hispanic, Omnivore, Vegan, Vegetarian, GlutenFree } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3" id="edit-user-page">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit User</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <h4>Preferences</h4>
                <Row>
                  <Col>
                    <h6>Ethnicity</h6>
                    <BoolField name="Asian" id="asian" />
                    <BoolField name="American" id="american" />
                    <BoolField name="European" id="european" />
                    <BoolField name="Hawaiian" id="hawaiian" />
                    <BoolField name="Hispanic" id="hispanic" />
                  </Col>
                  <Col>
                    <h6>Diet</h6>
                    <BoolField name="Omnivore" id="omnivore" />
                    <BoolField name="Vegan" id="vegan" />
                    <BoolField name="Vegetarian" id="vegetarian" />
                    <BoolField name="GlutenFree" id="glutenfree" />
                  </Col>
                </Row>
                <SubmitField id="submit" />
                <ErrorsField />
                <HiddenField name="name" />
                <HiddenField name="owner" />
              </Card.Body>
              <Card.Footer>
                <Link to="/listUser">Back to Profile Info</Link>
              </Card.Footer>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditUser;
