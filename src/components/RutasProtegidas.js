import React from 'react';
import { Navigate} from 'react-router-dom';

export const RutasProtegidas = ({user,redirectPath="/panel",children}) => {

   if(!user){
       return <Navigate to={redirectPath} replace />;
   }
   return children;
}
