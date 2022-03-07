import React from "react";
import "./Dashboard.css";
import { Header } from "./Header";
import { PanelProductos } from "./PanelProductos";
import { Tienda } from "../Tienda";
import { Switch, Route } from "react-router-dom";
import { Configuracion } from "./Configuracion";
import {Login} from "../Login"

export const Dashboard = () => {


  return (
        <div className="dashboardcontainer">
          {/* <div>
               <Header />              
          </div> */}

          <Switch>
            <Route path="/productos" exact={true} component={PanelProductos} />
            <Route path="/configuracion" exact={true} component={Configuracion} />
            <Route path="/administrador" exact={true} component={Login} />
            <Route path="/" exact={true} component={Tienda} />
          </Switch>
      </div>    
  );
};
