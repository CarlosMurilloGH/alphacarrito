import React, { useRef,useState } from 'react';
import { signup, useAuth, auth,login } from '../fb';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';


export const Login = () => {

  let history=useHistory();

  const [loading,setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef=useRef();
  const passwordRef=useRef();
  
  async function handleLogin(){
    setLoading(true);
    try{
      await login(emailRef.current.value, passwordRef.current.value);
    } catch{
      alert("Este email ya está en uso");
    }
    setLoading(false);
    history.push("/administrador")
  }

  async function handleSignup(){
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch{
      alert("Este email ya está en uso");
    }
  }


  return (
    <div>
      <div>
        Usuario Actual {currentUser?.email}
      </div>
      <form>
          <input ref={emailRef} type="email"/>
          <input ref={passwordRef} type="password" />
          <button disabled={loading || currentUser } onClick={handleSignup}>Registrarse</button>
          <button disabled={loading || currentUser } onClick={handleLogin}>Login</button>
          <button disabled={loading || !currentUser } onClick={()=>signOut(auth)}>Logout</button>
      </form>
    </div>
  )
}
