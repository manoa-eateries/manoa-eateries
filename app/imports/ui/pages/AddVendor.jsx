import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, BoolField, DateField, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Stuffs } from '../../api/stuff/Stuff';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  vendorName: String,
  owner: String,
  logo: String,
  openHour: Date,
  closeHour: Date,
  location: String,
  weekdaysOpen: String,
  Asian: Boolean,
  American: Boolean,
  European: Boolean,
  Hawaiian: Boolean,
  Hispanic: Boolean,
  Omnivore: Boolean,
  Vegan: Boolean,
  Vegetarian: Boolean,
  GlutenFree: Boolean,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddVendor = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { vendorName, openHour, closeHour, weekdaysOpen, Asian, American, European, Hawaiian, Hispanic, Omnivore, Vegan, Vegetarian, GlutenFree } = data;
    const owner = Meteor.user().username;
    Stuffs.collection.insert(
      { vendorName, openHour, closeHour, weekdaysOpen, Asian, American, European, Hawaiian, Hispanic, Omnivore, Vegan, Vegetarian, GlutenFree, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Stuff</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
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
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddVendor;
