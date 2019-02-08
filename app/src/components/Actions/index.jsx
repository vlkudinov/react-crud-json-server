import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";

const Actions  = ({children}) => (
  <div className='actions'>
    <h3>Actions</h3>
      {children}
  </div>
);

Actions.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Actions;