import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";

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
      console.log(data);
      setErrors(data);
    } else {
        closeModal()
    }
  };

  return (
    <div className="signup-modal">
      <div className="signup-header">
        <h1 className="text-white">Log in to Jamify</h1>
        <i className="fa fa-times" onClick={closeModal}></i>
      </div>
      <form onSubmit={handleSubmit} className="signup-form [&>input]:p-1 [&>input]:text-xs  [&>input]:md:text-base">

        <ul>
          {errors.map((error, idx) => (
            <li key={idx} className="errors">{error}</li>
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
        <button type="submit" id="signup-btn" className="text-base md:text-lg">LOG IN</button>
        <p id="login-demo" onClick={(e) => handleSubmit(e, true)}>Log in as Demo User</p>
        <OpenModalButton type="no-account-yet" modalComponent={<SignupFormModal />}/>
      </form>
    </div>
  );
}

export default LoginFormModal;
