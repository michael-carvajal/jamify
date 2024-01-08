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
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e, demo) => {
    e.preventDefault();
    setIsLoading(true)
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
    setIsLoading(false)
  };

  return (
    <div className="signup-modal">
      <div className="signup-header">
        <h1 className="text-white">Log in to Jamify</h1>
        <i className="fa fa-times hover:text-gray-400" onClick={closeModal}></i>
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
        <button type='submit' className={`text-white font-bold py-2 px-4 border-b-4 rounded ${isLoading ? "text-gray-400 hover:cursor-wait" : "bg-ug-yellow  w-full hover:bg-ug-red  border-ug-red hover:border-ug-yellow"} `}>
          Login
        </button>
        <p id="login-demo" onClick={(e) => handleSubmit(e, true)}>Log in as Demo User</p>
        <OpenModalButton type="no-account-yet" modalComponent={<SignupFormModal />}/>
      </form>
    </div>
  );
}

export default LoginFormModal;
