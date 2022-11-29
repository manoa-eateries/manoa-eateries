import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const User = ({ user }) => (
  <tr>
    <td>{user.name}</td>
    <td>{user.Asian}</td>
    <td>{user.American}</td>
    <td>{user.European}</td>
    <td>{user.Hawaiian}</td>
    <td>{user.Hispanic}</td>
    <td>{user.Omnivore}</td>
    <td>{user.Vegan}</td>
    <td>{user.Vegetarian}</td>
    <td>{user.GlutenFree}</td>
    <td>
      <Link to={`/edit/${user._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    Asian: PropTypes.bool,
    American: PropTypes.bool,
    European: PropTypes.bool,
    Hawaiian: PropTypes.bool,
    Hispanic: PropTypes.bool,
    Omnivore: PropTypes.bool,
    Vegan: PropTypes.bool,
    Vegetarian: PropTypes.bool,
    GlutenFree: PropTypes.bool,
    _id: PropTypes.string,
  }).isRequired,
};

export default User;
