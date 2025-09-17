import { useState } from "react";
import "./form.css";
// import api from "../api";

export default function FoodPartnerLogin() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");

  const handleChange = (e) => {}
    // setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const res = await api.post("/loginFoodPartner", form);
    //   setMessage(res.data.Message);
    // } catch (err) {
    //   setMessage(err.response?.data?.Message || "Error");
    // }
  };

  return (
    <div className="form-container">
      <h2>Food Partner Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      {/* <p>{message}</p> */}
    </div>
  );
}
