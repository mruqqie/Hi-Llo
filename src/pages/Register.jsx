import React from 'react';
import Add from '../img/addAvatar.png';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Hi-Llo</span>
            <span className="title">Sign up</span>
            <form>
                <input type='text' placeholder='Username' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <label htmlFor='file'>
                    <img src={Add} alt="" />
                    <span>Upload avatar</span>
                </label>
                <input type='file' id='file' className='file' />
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register