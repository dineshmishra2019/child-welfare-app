import React, { useState } from 'react';
import { schemes as initialSchemes } from './schemes';
import SchemeList from './SchemeList';
import SchemeDetail from './SchemeDetail';
import SchemeForm from './SchemeForm';
import './App.css';

// The main App component
const App = () => {
  const [schemes, setSchemes] = useState(initialSchemes);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingScheme, setEditingScheme] = useState(null);

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme);
  };

  const handleBackClick = () => {
    setSelectedScheme(null);
  };

  const handleShowForm = (scheme = null) => {
    setEditingScheme(scheme);
    setIsFormVisible(true);
  };

  const handleHideForm = () => {
    setIsFormVisible(false);
    setEditingScheme(null);
  };

  const handleFormSubmit = (formData) => {
    if (editingScheme) {
      // Update existing scheme
      setSchemes(schemes.map(s => s.id === editingScheme.id ? { ...s, ...formData } : s));
      setSelectedScheme(prev => prev ? { ...prev, ...formData } : null);
    } else {
      // Add new scheme
      const newScheme = { ...formData, id: Date.now() }; // Use timestamp for a unique ID
      setSchemes([newScheme, ...schemes]);
    }
    handleHideForm();
  };

  const handleDeleteScheme = (schemeId) => {
    if (window.confirm('Are you sure you want to delete this scheme?')) {
      setSchemes(schemes.filter(s => s.id !== schemeId));
      // Go back to the list view after deleting
      setSelectedScheme(null);
    }
  };

  return (
    <div className="app-container">
      {isFormVisible && (
        <SchemeForm
          onSubmit={handleFormSubmit}
          onCancel={handleHideForm}
          initialData={editingScheme}
        />
      )}
      <div className="content-wrapper">
        <header className="app-header">
          <h1>Child Welfare Schemes</h1>
          <p>
            Explore and learn about various government schemes and initiatives for the welfare of children.
          </p>
        </header>

        {selectedScheme ? (
          <SchemeDetail
            scheme={selectedScheme}
            onBackClick={handleBackClick}
            onEdit={() => handleShowForm(selectedScheme)}
            onDelete={handleDeleteScheme}
          />
        ) : (
          <>
            <div className="list-header">
              <button onClick={() => handleShowForm()} className="button-primary">Add New Scheme</button>
            </div>
            <SchemeList schemes={schemes} onSchemeClick={handleSchemeClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
