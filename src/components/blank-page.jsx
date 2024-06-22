import React from 'react';
import PropTypes from 'prop-types';

const BlankPage = (props) => {
  const { title, children } = props;
  return (
    <div className={`app-page app-page-blank`}>
      <span className="title">{title}</span>
      {children}
    </div>
  );
};

BlankPage.propTypes = {
  title: PropTypes.string.isRequired,
};
BlankPage.defaultProps = {
  title: '',
};

export default BlankPage;
