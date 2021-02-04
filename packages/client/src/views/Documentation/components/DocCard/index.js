import React from 'react';

const DocCard = (props) => {
  const { id, title, children } = props;
  return (
    <div className="doc-card" id={id}>
      <h2 className="doc-card-heading">{title}</h2>
      <div className="doc-card-body">{children}</div>
    </div>
  );
};

export default DocCard;
