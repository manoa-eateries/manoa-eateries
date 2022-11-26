import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const VendorCard = ({ vendor }) => (
  <tr>
    <td>{vendor.vendorName}</td>
    <td>{<Image src={vendor.logo} width="100px" />}</td>
  </tr>
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
