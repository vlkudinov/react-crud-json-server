import React from 'react';
import "./style.scss";
import PropTypes from "prop-types";

const PageTitle  = ({title = 'Title'}) => (
  <div className="page-title">
    <h1 className="page-title__title">{title}</h1>
    <div className="page-title__divider"/>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;