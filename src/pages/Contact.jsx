import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been submitted. Our legal team will contact you soon!");
    setFormData({ name: "", email: "", phone: "", category: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact LegalEase</h1>
      <p>Reach out to our legal aid team for any legal emergencies or queries.</p>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Submit a Legal Query</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
           
  <option value="">Select Category</option>
  <option value="Fundamental Rights">Fundamental Rights</option>
  <option value="Constitutional Rights">Constitutional Rights</option>
  <option value="Civil Rights">Civil Rights</option>
  <option value="Political Rights">Political Rights</option>
  <option value="Economic Rights">Economic Rights</option>
  <option value="Social Rights">Social Rights</option>
  <option value="Human Rights">Human Rights</option>
  <option value="Workplace Rights">Workplace Rights</option>
  <option value="Consumer Rights">Consumer Rights</option>
  <option value="Women & Child Rights">Women & Child Rights</option>
  <option value="Digital Rights">Digital Rights</option>
  <option value="Environmental Rights">Environmental Rights</option>
  <option value="Disability Rights">Disability Rights</option>
  <option value="Senior Citizen Rights">Senior Citizen Rights</option>
  <option value="LGBTQ+ Rights">LGBTQ+ Rights</option>
  <option value="Minority Rights">Minority Rights</option>
  <option value="Police & Crime">Police & Crime</option>
  <option value="Workplace & Labor">Workplace & Labor</option>
  <option value="Cyber & Online Legal Issues">Cyber & Online Legal Issues</option>
  <option value="Other">Other</option>


          </select>
          <textarea
            name="message"
            placeholder="Describe your legal query"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit Query</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
