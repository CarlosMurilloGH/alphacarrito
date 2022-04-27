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
                  <a href='https://api.whatsapp.com/send?phone=51940922980&text=Hola,%20vengo%20del%20demo'>
                  <img
                    className="redesicon"
                    src={whatsapp}
                    alt="whatsapp logo"
                  />
                  </a>
                </div>

                <div>
                  <a href='https://www.facebook.com/Inbokzer'>
                  <img
                    className="redesicon"
                    src={facebook}
                    alt="facebook logo"
                  />
                  </a>
                </div>

                <div>
                  <a href='https://www.instagram.com/inbokzer/'>
                  <img
                    className="redesicon"
                    src={instagram}
                    alt="instagram logo"
                  />
                  </a>
                </div>

                <div>
                  <a href='https://inbokzer.com'>
                  <img className="redesicon" src={google} alt="google logo" />
                  </a>
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
