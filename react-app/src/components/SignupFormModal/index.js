import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";
import LoginFormModal from "../LoginFormModal";
import OpenModalButton from "../OpenModalButton";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true)
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password, first_name, last_name));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
		setIsLoading(false)
	};

	return (
		<div className="signup-modal">
			<div className="signup-header">
				<h1>Sign up to rock out!</h1>
				<i className="fa fa-times hover:text-gray-400" onClick={closeModal}></i>
			</div>
			<form onSubmit={handleSubmit} className="signup-form [&>input]:p-1 [&>input]:text-xs  [&>input]:md:text-base">
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<input
					placeholder="Email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					placeholder="Username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<input
					placeholder="First Name"
					type="text"
					value={first_name}
					onChange={(e) => setFirst_name(e.target.value)}
					required
				/>
				<input
					placeholder="Last Name"
					type="text"
					value={last_name}
					onChange={(e) => setLast_name(e.target.value)}
					required
				/>
				<input
					placeholder="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<input
					placeholder="Confirm Password"
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				<button type='submit' className={`w-full ${isLoading ? "text-gray-400 hover:cursor-wait" : " text-white font-bold bg-ug-red  hover:bg-yellow-600 border-yellow-600 hover:border-ug-red "}  py-2 px-4 border-b-4 rounded`}>
					Sign Up
				</button>
				<OpenModalButton type="has-account-login" modalComponent={<LoginFormModal />} />
			</form>
		</div>
	);
}

export default SignupFormModal;
