import { useState } from "react";
// import api from "../api";
import "./form.css";

export default function FoodPartnerRegister() {
//   const [form, setForm] = useState({ name: "", email: "", password: "", phone: "", address: "", contectName: "" });
//   const [message, setMessage] = useState("");

  const handleChange = (e) =>{}
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const res = await api.post("/registerFoodPartner", form);
    //   setMessage(res.data.Message);
    // } catch (err) {
    //   setMessage(err.response?.data?.Message || "Error");
    // }
  };

  return (
    <div className="form-container">
      <h2>Food Partner Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="contectName" placeholder="Contact Name" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      {/* <p>{message}</p> */}
    </div>
  );
}
