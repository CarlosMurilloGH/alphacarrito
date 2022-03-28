import React,{useState,useEffect} from 'react';
import "./Footer.css";
import { app } from '../../fb';
import facebook from "../../medios/redes sociales/facebook.svg";
import google from "../../medios/redes sociales/google.svg";
import instagram from "../../medios/redes sociales/instagram.svg";
import whatsapp from "../../medios/redes sociales/whatsapp.svg";


export const Footer = () => {

	const [footerdata,setFooterdata]=useState([]);

    const getFooterData = () => {
		app
			.firestore()
			.collection("configuracion")
			.get()
			.then((querySnapshot) => {
				const data = [];
				querySnapshot.forEach((doc) => {
					data.push({ ...doc.data(), id: doc.id });
				});
				setFooterdata(data);
			})
			.catch((err) => console.error(err));
	};


    useEffect(() => {
		getFooterData();
	}, []);  


    return (
      <div className="footercontainer">
        <div className="footercolumns">
          <div className="logocolumn">
            {footerdata.map((footerdata) => (
              <h2 className="NombreTienda" key={footerdata.id}>
                {footerdata.negocio}
              </h2>
            ))}
          </div>

          <div className="columnafooter1">
            <div>
              <h2 className="titulofooter">Dirección</h2>
              <div>
                {footerdata.map((footerdata) => (
                  <p key={footerdata.id}>{footerdata.direccionlinea1}</p>
                ))}
                {footerdata.map((footerdata) => (
                  <p key={footerdata.id}>{footerdata.direccionlinea2}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="columnafooter2">
            <div>
              <h2 className="titulofooter">Número del negocio</h2>
              <p className="numeronegocio">
                {" "}
                {footerdata.map((footerdata) => (
                  <p key={footerdata.id}>{footerdata.numeronegocio}</p>
                ))}
              </p>
            </div>
          </div>

          <div className="columnafooter3">
            <div>
              <h2 className="titulofooter">Redes Sociales</h2>
              <div className="redesgrid">
                <div>
                  <img
                    className="redesicon"
                    src={whatsapp}
                    alt="whatsapp logo"
                  />
                </div>

                <div>
                  <img
                    className="redesicon"
                    src={facebook}
                    alt="facebook logo"
                  />
                </div>

                <div>
                  <img
                    className="redesicon"
                    src={instagram}
                    alt="instagram logo"
                  />
                </div>

                <div>
                  <img className="redesicon" src={google} alt="google logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='creditoscontainer'>
            <p>Una tienda virtual construida por <a href='https://inbokzer.com'>Inbokzer</a></p>
        </div>
      </div>
    );
}
