import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search for a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/14686959/pexels-photo-14686959.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Joey</span>
        </div>
      </div>
    </div>
  )
}

export default Search