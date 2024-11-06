import React, { useState } from 'react';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    email: '',
    category: '',
    title: '',
    description: '',
    anonymous: false,
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to submit the form data to your backend
    console.log('Form submitted:', formData);
    alert('Complaint submitted successfully!');
    setFormData({
      name: '',
      rollNumber: '',
      email: '',
      category: '',
      title: '',
      description: '',
      anonymous: false,
      file: null,
    });
  };

  return (
    <div className="complaint-form">
      <h2>College Complaint Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="form-group">
          <label htmlFor="name">Name (Optional):</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number (Optional):</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Contact Email (Optional):</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Complaint Category */}
        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="Mess">Mess</option>
            <option value="Hostel">Hostel</option>
            <option value="Academics">Academics</option>
          </select>
        </div>

        {/* Complaint Details */}
        <div className="form-group">
          <label htmlFor="title">Issue Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* File Attachment */}
        <div className="form-group">
          <label htmlFor="file">Attachment (Optional):</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>

        {/* Privacy Option */}
        <div className="form-group">
          <label htmlFor="anonymous">Submit Anonymously:</label>
          <input
            type="checkbox"
            id="anonymous"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
