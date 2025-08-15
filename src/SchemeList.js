import React from 'react';

const SchemeCard = ({ scheme, onClick }) => (
  <div className="scheme-card" onClick={onClick} role="button" tabIndex="0" onKeyPress={(e) => e.key === 'Enter' && onClick()}>
    <h3>{scheme.name}</h3>
    <p>{scheme.shortDescription}</p>
  </div>
);

const SchemeList = ({ schemes, onSchemeClick }) => {
  return (
    <div className="scheme-list">
      {schemes.map((scheme) => (
        <SchemeCard key={scheme.id} scheme={scheme} onClick={() => onSchemeClick(scheme)} />
      ))}
    </div>
  );
};

export default SchemeList;