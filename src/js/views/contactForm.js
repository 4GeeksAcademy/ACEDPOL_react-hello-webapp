import React, { useState, useContext } from "react";
import { Context } from "../store/contactContext";
import { Link } from "react-router-dom";

export const ContactForm = () => {
  const { actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(contact);
    setContact({
      name: "",
      address: "",
      phone: "",
      email: ""
    });
  };

  return (
    <div className="container w-50">
      <h2 className="my-4">Add a new contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={contact.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/contact-list">
            <a className="btn btn-link">or get back to contacts</a>
        </Link>
      </form>
    </div>
  );
};
