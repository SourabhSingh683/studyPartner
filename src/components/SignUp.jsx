import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      localStorage.setItem("token", res.data.token);
      alert("Signup successful!");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Signup</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="input" required />
        <button type="submit" className="btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
