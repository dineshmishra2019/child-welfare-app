import React, { useState, useEffect } from 'react';

const SchemeForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    fullDescription: '',
    eligibility: '',
    benefits: '',
    howToApply: '',
    link: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>{initialData ? 'Edit Scheme' : 'Add New Scheme'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />

          <label>Short Description</label>
          <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} required />

          <label>Full Description</label>
          <textarea name="fullDescription" value={formData.fullDescription} onChange={handleChange} rows="5" />

          <label>Eligibility</label>
          <textarea name="eligibility" value={formData.eligibility} onChange={handleChange} />

          <label>Benefits</label>
          <textarea name="benefits" value={formData.benefits} onChange={handleChange} />

          <label>How to Apply</label>
          <textarea name="howToApply" value={formData.howToApply} onChange={handleChange} />

          <label>Official Link</label>
          <input name="link" value={formData.link} onChange={handleChange} />

          <div className="form-actions">
            <button type="submit" className="button-primary">Save Scheme</button>
            <button type="button" onClick={onCancel} className="button-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SchemeForm;