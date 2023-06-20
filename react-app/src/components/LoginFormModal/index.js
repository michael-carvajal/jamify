import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e, demo) => {
    e.preventDefault();
    if (demo) {
      const data = await dispatch(login("demo@aa.io", "password"));
      closeModal()
      return
    }
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  return (
    <div className="signup-modal">
      <div className="signup-header">
        <h1>Log in</h1>
        <i className="fa fa-times" onClick={closeModal}></i>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <input
            type="text"
          value={email}
          placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
          type="password"
          placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button type="submit" id="signup-btn" style={{ padding: "10px 0px" }}>LOG IN</button>
        <p id="login-demo" onClick={(e) => handleSubmit(e, true)}>Log in as Demo User</p>
      </form>
    </div>
  );
}

export default LoginFormModal;
