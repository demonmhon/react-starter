import React from 'react';

const BlankPage = (props) => {
  const { title, children } = props;
  return (
    <div className={`app-page app-page-blank`}>
      <span className="title">{title}</span>
      {children}
    </div>
  );
};

BlankPage.defaultProps = {
  title: '',
};

export default BlankPage;
