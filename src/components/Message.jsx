import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = (message) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  console.log(message)
  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/14686959/pexels-photo-14686959.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hey</p>
        <img
          src="https://images.pexels.com/photos/14686959/pexels-photo-14686959.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
      </div> */}
    </div>
  )
}

export default Message