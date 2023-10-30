import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
	const [err, setErr] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/home");
		} catch (err) {
			if (
				err.code === "auth/invalid-email" ||
				err.code === "auth/wrong-password"
			) {
				setErr("Invalid email or password.");
			} else if (err.code === "auth/user-not-found") {
				setErr(
					"There is no user record corresponding to this email address."
				);
			} else {
				setErr(err.message);
			}
		}
	};
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Hi-Llo</span>
				<span className="title">Sign in</span>
				{err && <span className="err">{err}</span>}
				<form onSubmit={handleSubmit}>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button>Sign in</button>
				</form>
				<p>
					Don't have an account? <Link to="/">Sign up</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
