import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, RadioField, SubmitField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { UserProfiles } from '../../api/user/userProfile';

const formSchema = new SimpleSchema({
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
const AddUser = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { Asian, American, European, Hawaiian, Hispanic, Omnivore, Vegan, Vegetarian, GlutenFree } = data;
    const name = Meteor.user().username;
    const owner = Meteor.user().username;
    UserProfiles.collection.insert(
      { name, owner, Asian, American, European, Hawaiian, Hispanic, Omnivore, Vegan, Vegetarian, GlutenFree },
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
          <Col className="text-center"><h2>Set Preferences</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <h4>Preferences</h4>
                <Row>
                  <Col>
                    <h6>Ethnicity</h6>
                    <RadioField name="Asian" allowedValues={[true.toString(), false.toString()]} />
                    <RadioField name="American" allowedValues={[true.toString(), false.toString()]} />
                    <RadioField name="European" allowedValues={[true.toString(), false.toString()]} />
                    <RadioField name="Hawaiian" allowedValues={[true.toString(), false.toString()]} />
                    <RadioField name="Hispanic" allowedValues={[true.toString(), false.toString()]} />
                  </Col>
                  <Col>
                    <h6>Diet</h6>
                    <RadioField name="Omnivore" allowedValues={[true.toString(), false.toString()]} />
                    <RadioField name="Vegan" allowedValues={[true.toString(), false.toString()]} />
                    <RadioField name="Vegetarian" allowedValues={[true.toString(), false.toString()]} />
                    <RadioField name="GlutenFree" allowedValues={[true.toString(), false.toString()]} />
                  </Col>
                </Row>
                <SubmitField />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
