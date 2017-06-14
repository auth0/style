import React, { PropTypes } from 'react';
import './index.styl';

const LogoBox = ({ title, children, logoClass, downloadLink }) =>
  <div className="col-xs-12 col-md-6">
    <div className={`logo-branding ${logoClass}`}>
      <h5>{title}</h5>
      {children}
      <a href={downloadLink} target="_blank" rel="noopener noreferrer">
        Download
      </a>
    </div>
  </div>;

LogoBox.defaultProps = {
  logoClass: ''
};

LogoBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  logoClass: PropTypes.string,
  downloadLink: PropTypes.string.isRequired
};

export default LogoBox;
