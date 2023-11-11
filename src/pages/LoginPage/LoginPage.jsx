import './LoginPage.scss';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getIdToken, } from "firebase/auth";
import { db, app } from '../../App';
import { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import google from '../../assets/icons/links/google.svg'
import linkedin from '../../assets/icons/links/linkedin.svg'
import linkedintext from '../../assets/icons/links/linkedintext.png'
import googletext from '../../assets/icons/links/googletext.png'




const LoginPage = () => {


  const auth = getAuth(app);
  const Navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const provider = new GoogleAuthProvider();



  useEffect(() => {
    const checkUserAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user != null) {
          Navigate('/')
        }
      });
    };

    checkUserAuth();
  }, [])



  const GoogleSignIn = () => {


    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // User signed in with Google. You can handle the user data here.
      })
      .catch((error) => {
        // Handle sign-in errors here.
      });
  };
  

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('signedIn', cred.user)
        const userData = cred.data
        sessionStorage.setItem('userData', JSON.stringify(userData))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }


  return (
    <div className="centerForm">
      
      <img className='logoMark' src={logo}></img>
      
      <h2 className='loginH2'>Welcome Back!</h2>

      <form className='loginForm' onSubmit={signIn}>

        <input
          className='inputLogin'
          type='email'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='inputLogin'
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='checkBoxLoginDiv'>
          <input className='checkBoxLogin' type='checkbox' />
          <p>Remember me?</p>
        </div>

      </form>

      <button 
      className='loginBtn'
      type='submit' 
      onClick={signIn}>
        Login
      </button>

      <a className="center-vertically" href='needToFill'>Forgot Password?</a>

      <div className="continueWith"><p>Or continue with</p></div>

      <div className="altBtns">
        <div className='border'>
          <button className='loginBtn' type="button" onClick={GoogleSignIn} >
          <img src={google} className='linkSvg'/>
          <img src={googletext} className='linkText'/>
        </button>
        </div>
        <div className='border'>
        <button className="loginBtn" type="button">
          <img src={linkedin} className='linkSvg'/>
          <img src={linkedintext} className='linkText'/>
        </button>
        </div>
      </div>

      
        <p className='continueWith'>Don't have an account?</p>
        <a style={{zIndex:'1'}} href='/signup'>Sign Up</a>

        <div className='background'></div>
        {/* <div className='pinkBlob2'></div> */}

    </div>
  );
};

export default LoginPage;
