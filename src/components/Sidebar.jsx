import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = ({handleChatClick, sidebarClass}) => {
  return (
    <div className={`sidebar ${sidebarClass}`}>
      <Navbar />
      <Search />
      <Chats handleChatClick={handleChatClick} />
    </div>
  )
}

export default Sidebar