import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
	const [sidebarClass, setSidebarClass] = useState("on");

	const toggleSidebarClass = () => {
		setSidebarClass(sidebarClass === "on" ? "off" : "on");
	};
	return (
		<div className="home">
			<div className="container">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
};

export default Home;
