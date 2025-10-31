import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.role)
      return alert("Please fill all fields and select a role");

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        role: form.role,
      });

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Sign Up</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />

        <div>
          <label>
            <input type="radio" name="role" value="NGO" checked={form.role === "NGO"} onChange={handleChange} />
            NGO
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input type="radio" name="role" value="Legal Officer" checked={form.role === "Legal Officer"} onChange={handleChange} />
            Legal Officer
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input type="radio" name="role" value="Other" checked={form.role === "Other"} onChange={handleChange} />
            Other
          </label>
        </div>

        <button type="submit" style={{ padding: "10px" }}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
