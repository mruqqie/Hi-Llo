import React, { useContext } from "react";
import Input from "./Input";
import Messages from "./Messages";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import ArrowBack from "../img/arrowback.ico";
import { ChatContext } from "../context/ChatContext";

const Chat = ({handleBackClick, className}) => {
	const { data } = useContext(ChatContext);

	return (
		<div className={`chat ${className}`}>
			<div className="chatInfo">
				<img src={ArrowBack} alt="" className="arrowback" onClick={handleBackClick} />
				<span>{data.user?.displayName}</span>
				<div className="chatIcons">
					<img src={Cam} alt="" />
					<img src={Add} alt="" />
					<img src={More} alt="" />
				</div>
			</div>
			<Messages />
			<Input />
		</div>
	);
};

export default Chat;
