import React from 'react';

const SchemeDetail = ({ scheme, onBackClick, onEdit, onDelete }) => {
  if (!scheme) {
    return (
      <div className="scheme-detail">
        <p>No scheme selected.</p>
        <button onClick={onBackClick} className="back-button">Back to Schemes</button>
      </div>
    );
  }

  return (
    <div className="scheme-detail">
      <div className="detail-header">
        <button onClick={onBackClick} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Schemes
        </button>
        <div className="detail-actions">
          <button onClick={onEdit} className="button-secondary">Edit</button>
          <button onClick={() => onDelete(scheme.id)} className="button-danger">Delete</button>
        </div>
      </div>

      <h2>{scheme.name || "No Name"}</h2>
      <p className="scheme-detail-description">
        {scheme.shortDescription || "No short description available."}
      </p>

      <div className="scheme-detail-sections-wrapper">
        <div className="detail-section">
          <h3>Description</h3>
          <p>{scheme.fullDescription || "No description available."}</p>
        </div>
        <div className="detail-section">
          <h3>Eligibility</h3>
          <p>{scheme.eligibility || "No eligibility information."}</p>
        </div>
        <div className="detail-section">
          <h3>Benefits</h3>
          <p>{scheme.benefits || "No benefits information."}</p>
        </div>
        <div className="detail-section">
          <h3>How to Apply</h3>
          <p>{scheme.howToApply || "No application information."}</p>
        </div>
        {scheme.link && (
          <div className="detail-section">
            <h3>Official Website</h3>
            <a
              href={scheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="official-link"
            >
              {scheme.link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemeDetail;