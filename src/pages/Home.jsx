import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
	const [sidebarClass, setSidebarClass] = useState("sidebarOn");
	const [chatClass, setChatClass] = useState("chatOff")

	const handleBackClick = () => {
		setSidebarClass("sidebarOn")
		setChatClass("chatOff")
	}

	const handleChatClick = () => {
		setSidebarClass("sidebarOff")
		setChatClass("chatOn")
	}

	return (
		<div className="home">
			<div className="container">
				<Sidebar className={sidebarClass} handleChatClick={handleChatClick} />
				<Chat handleBackClick={handleBackClick} className={chatClass} />
			</div>
		</div>
	);
};

export default Home;
