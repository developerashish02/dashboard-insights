import "./Login.css";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
	return (
		<div className="login__dashboard">
			<div className="login__form">
				<LoginForm />
			</div>
			<div className="login__background"></div>
		</div>
	);
};

export default Login;
