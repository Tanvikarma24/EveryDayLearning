import { useState } from "react";
import "./form.css";
import axios from 'axios';

export default function UserRegister() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>{}
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/registerUser", form);
      setMessage(res.data.Message);
    } catch (err) { 
      setMessage(err.response?.data?.Message || "Error");
    }
  };

  return (
    <div className="form-container">
      <h2>User Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      {/* <p>{message}</p> */}
    </div>
  );
}
    