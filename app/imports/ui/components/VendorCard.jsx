import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const VendorCard = ({ vendor }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={vendor.logo} width={200} />
      <Card.Title>{vendor.vendorName}</Card.Title>
    </Card.Header>
  </Card>
);

// Require a document to be passed to this component.
VendorCard.propTypes = {
  vendor: PropTypes.shape({
    vendorName: PropTypes.string,
    logo: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default VendorCard;
