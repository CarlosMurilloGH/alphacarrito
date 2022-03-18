import React from "react";
import "./Dashboard.css";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {


  return (
        <div className="dashboardcontainer">
          <div>
               <Header />              
          </div> 

          <div>
            <Outlet></Outlet>
          </div>
      </div>    
  );
};
