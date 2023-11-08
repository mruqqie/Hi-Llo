import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { currentUser } = useContext(AuthContext);

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />;
		}
		return children;
	};

	return (
		<div className="App">
			<BrowserRouter basename="/Hi-Llo">
				<Routes>
					<Route path="/">
						<Route
							path="/home"
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>
						<Route path="/login" element={<Login />} />
						<Route index path="/" element={<Register />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
