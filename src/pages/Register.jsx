import React from 'react';
import { useState } from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file)
      .then(() => {
        getDownloadURL(storageRef).then(async(downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL
          });
          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate('/');
        });
      })
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
            {err && <span className='err'>{err}</span>}
            <form onSubmit={handleSubmit}>
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
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register