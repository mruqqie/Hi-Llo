import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import moment from 'moment/moment';

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behaviour: "smooth"})
  }, [message]);
  

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={message.senderId === currentUser.uid ? 
            currentUser.photoURL : data.user.photoURL}
          alt=""
        />
        <span>{moment(message.date.toDate()).format('h:mm a')}</span>
      </div>
      <div className="messageContent">
        {message.text && <p>{message.text}</p>}
        {message.img &&
         <img src={message.img} alt=""/>}
      </div>
    </div>
  )
}

export default Message