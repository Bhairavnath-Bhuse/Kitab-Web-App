import React, { useState } from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
        <Navbar />
    <div className="w-8/12 mx-auto p-6 bg-blue-300 text-white font-bold">
        
      <h1 className="text-2xl mb-4">Contact Us</h1>
      <p className="mb-4">
        We're here to assist you in finding the perfect book! Whether you have questions about our services, need book recommendations, or just want to say hello, feel free to reach out to us.
      </p>
      <div className="mb-4">
        <p>Email: info@kitab.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <p className="mb-4">
        Our dedicated team is ready to help you discover the joy of reading. Don't hesitate to get in touch!
      </p>
      <form onSubmit={handleSubmit} className="bg-blue-700 p-4 rounded">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
