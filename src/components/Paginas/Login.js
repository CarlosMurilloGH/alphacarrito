import React,{useState} from "react";
import "./Login.css";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../../fb";
import {useNavigate} from "react-router-dom";
import AuthProvider from "../AuthProvider";

function Login() {

  const navigate=useNavigate();
  // const [currentUser,setCurrentUser]=useState(null);
  /*
  Estados:
  0.-Inicializado
  1.-Loading
  2.-Login Completado
  3.-Login pero sin registro
  4.-no hay nadie logueado
  5.-Login Completado
  */
  const [state,setCurrentState]=useState(0);

  // //Vamos a detectar si el usuario está autenticado
  // useEffect(()=>{
  //   setCurrentState(1)
  //   //con esta función de firebase comprobamos en cada render en que fase está el usuario
  //   onAuthStateChanged(auth,async(user)=>{
  //     if(user){
  //       //Acá comprobamos si el usuario existe
  //       const isRegistered = await userExists(user.uid);
  //       if(isRegistered){
  //         //usuario logueado
  //         //redirigir a dashboard
  //         navigate("./Panel");
  //         setCurrentState(2);
  //       }else{
  //         //logueado pero no registrado
  //         //redirigir a elegir nombre de negocio
  //         navigate("./Nombra-tu-tienda");
  //         setCurrentState(3);
  //       }
  //     }else{
  //       //no hay nadie logueado
  //       setCurrentState(4);
  //       console.log("no hay nadie autenticado")
  //     }
  //   });
  // },[navigate]);

  //con esto nos logeamos
  async function handleOnClick(){
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider){
      try {
        const res = await signInWithPopup(auth,googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }

    function handleUserLoggedIn(user){
      navigate("/panel");
    }

    function handleUserNotRegistered(user){
      navigate("/nombra-tu-tienda");
    }

    function handleUserNotLoggedIn(){
      setCurrentState(4);
    }

     
    if(state == 4){
      return (
        <div className="Loginregistercontainer">
          <button onClick={handleOnClick}>Login Google</button>
        </div>
      );
    }
    
    return (
      <AuthProvider 
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        <p>Loading...</p>
      </AuthProvider>
    );
  }
  



export default Login;