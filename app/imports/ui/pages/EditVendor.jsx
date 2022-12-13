import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, BoolField, SubmitField, TextField, DateField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { VendorProfiles } from '../../api/vendor/vendorProfile';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(VendorProfiles.schema);

/* Renders the EditStuff page for editing a single document. */
const EditVendor = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(VendorProfiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = VendorProfiles.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { owner, vendorName, openHour, closeHour, weekdaysOpen, Asian, American, European, Hawaiian, Hispanic, Omnivore, Vegan, Vegetarian, GlutenFree } = data;
    VendorProfiles.collection.update(_id, { $set: { owner, vendorName, openHour, closeHour, weekdaysOpen, Asian, American, European, Hawaiian, Hispanic, Omnivore, Vegan, Vegetarian, GlutenFree } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };
  return ready ? (
    <Container className="py-3" id="#edit-vendor-page">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Stuff</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="vendorName" />
                <LongTextField name="logo" />
                <DateField name="openHour" />
                <DateField name="closeHour" />
                <TextField name="weekdaysOpen" />
                <TextField name="location" />
                <h4>Preferences</h4>
                <Row>
                  <Col>
                    <h6>Ethnicity</h6>
                    <BoolField name="Asian" />
                    <BoolField name="American" />
                    <BoolField name="European" />
                    <BoolField name="Hawaiian" />
                    <BoolField name="Hispanic" />
                  </Col>
                  <Col>
                    <h6>Diet</h6>
                    <BoolField name="Omnivore" />
                    <BoolField name="Vegan" />
                    <BoolField name="Vegetarian" />
                    <BoolField name="GlutenFree" />
                  </Col>
                </Row>
                <SubmitField name="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
              <Card.Footer>
                <Link to="/vendorprofiles">Back to Profile Info</Link>
              </Card.Footer>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditVendor;
