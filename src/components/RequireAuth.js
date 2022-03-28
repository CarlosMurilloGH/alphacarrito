import React,{useState} from "react";
import {useLocation,Navigate,Outlet} from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../fb";


export function RequireAuth() {
 
  const [user, setUser] = useState(true);
  const location = useLocation();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

    if (!user) {
      return <Navigate to="/iniciar" replace state={{ from: location }} />;
    
    }

  
    return <Outlet />;
  

  
}