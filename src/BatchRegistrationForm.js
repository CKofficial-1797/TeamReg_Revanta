import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BatchRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNumber: '',
    branch: '',
    tshirtSize: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    const response = await fetch('https://formspree.io/f/xanwpawz', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      formElement.reset();
    } else {
      alert('Failed to submit the form');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor="regNumber">Registration Number:</label>
        <input
          type="text"
          id="regNumber"
          name="regNumber"
          value={formData.regNumber}
          onChange={handleChange}
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="branch">Branch:</label>
        <input
          type="text"
          id="branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label htmlFor="tshirtSize">T-shirt Size:</label>
        <select
          id="tshirtSize"
          name="tshirtSize"
          value={formData.tshirtSize}
          onChange={handleChange}
          required
        >
          <option value="">Select Size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
        </select>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          accept="image/*"
          required
        />
      </motion.div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        style={{
          marginTop: '10px',
          padding: '10px 15px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Register
      </motion.button>
    </motion.form>
  );
};

export default BatchRegistrationForm;
