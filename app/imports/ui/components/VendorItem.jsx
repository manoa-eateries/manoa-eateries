import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const VendorItem = ({ vendor }) => (
  <tr>
    <td>{vendor.vendorName}</td>
    <td><Image src={vendor.logo} width="25px" /></td>
    <td>{vendor.weekdaysOpen}</td>
    <td>
      <Link to={`/editVendor/${vendor._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
VendorItem.propTypes = {
  vendor: PropTypes.shape({
    vendorName: PropTypes.string,
    logo: PropTypes.string,
    weekdaysOpen: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default VendorItem;
