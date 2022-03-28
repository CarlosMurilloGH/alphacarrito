import { useState } from "react";
import "./Login.css";
import {
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../fb";
import { useLocation, useNavigate } from "react-router";

function Login() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // eslint-disable-next-line
  const [user, setUser] = useState({});

  const navigate=useNavigate();
  const location =useLocation();


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }if(location.state?.from) {
  //     navigate(location.state.from);
  //   }
  // };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    } if(location.state?.from) {
      navigate(location.state.from);
    }
  };


  return (
    <div className="Loginregistercontainer">

      <div className="formscontainer">

      {/* <div className="formbox">
          <h2 className="titlelogin">Registrate</h2>
          <div className="inputcontainer">
            <div className="inputbox">
            <input
              className="inputstyle"
              placeholder="Email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            </div>
            <div className="inputbox">
            <input
              className="inputstyle"
              placeholder="Contraseña"
              type="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            </div>
            <div className="botoncontainer">
              <button className="botonlogin" onClick={register}> Crear cuenta</button>
            </div>            
          </div>
        </div> */}

        <div className="formbox">
          <h2 className="titlelogin"> Inicia tu sesión </h2>
          <div className="inputcontainer">
            <div className="inputbox">
              <input
                className="inputstyle"
                placeholder="Email"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
            </div>
            <div className="inputbox">
            <input
              className="inputstyle"
              placeholder="Contraseña"
              type="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            </div>
            <div className="botoncontainer">
              <button className="botonlogin" onClick={login}>Iniciar</button>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Login;