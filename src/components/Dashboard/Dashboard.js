import React from "react";
import "./Dashboard.css";
import { Header } from "./Header";
import { PanelProductos } from "./PanelProductos";
import { Tienda } from "../Tienda";
import { Switch, Route } from "react-router-dom";
import { Configuracion } from "./Configuracion";

export const Dashboard = () => {
  return (
    <div className="dashboardcontainer">
      <div>
        <Header />
      </div>

      <Switch>
        <Route path="/tienda" exact={true} component={Tienda} />
        <Route path="/productos" exact={true} component={PanelProductos} />
        <Route path="/configuracion" exact={true} component={Configuracion} />
      </Switch>
    </div>
  );
};
