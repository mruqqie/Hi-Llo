import React from 'react';
import { useState } from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util';

const Register = () => {
  const [err, setErr] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, 'images/rivers.jpg');      
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on(
        (err) => {
          setErr(err.message)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            })
          });
        }
      );
    }catch(err){
      if (err.code === 'auth/email-already-in-use') {
        setErr('This email address is already in use');
      } else {
        setErr(err.message);
      }
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Hi-Llo</span>
            <span className="title">Sign up</span>
            <form onSubmit={handleSubmit}>
              {err && <span className='err'>{err}</span>}
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