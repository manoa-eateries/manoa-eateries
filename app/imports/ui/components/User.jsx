import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const User = ({ user }) => (
  <tr>
    <td>{user.name}</td>
    <td>{user.Asian.toString()}</td>
    <td>{user.American.toString()}</td>
    <td>{user.European.toString()}</td>
    <td>{user.Hawaiian.toString()}</td>
    <td>{user.Hispanic.toString()}</td>
    <td>{user.Omnivore.toString()}</td>
    <td>{user.Vegan.toString()}</td>
    <td>{user.Vegetarian.toString()}</td>
    <td>{user.GlutenFree.toString()}</td>
    <td>
      <Link id="edit" to={`/edit/${user._id}`}>Edit</Link>
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
