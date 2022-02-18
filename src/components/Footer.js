import React,{useState,useEffect} from 'react';
import "./Footer.css";
import { app } from '../fb';

import american from "../medios/metodos de pago/american-express-logo.png";
import mastercard from "../medios/metodos de pago/master-card-logo.png";
import plin from "../medios/metodos de pago/plin-logo.png";
import visa from "../medios/metodos de pago/visa-logo.png";
import yape from "../medios/metodos de pago/yape-logo.png";

import facebook from "../medios/redes sociales/facebook.svg";
import google from "../medios/redes sociales/google.svg";
import instagram from "../medios/redes sociales/instagram.svg";
import whatsapp from "../medios/redes sociales/whatsapp.svg";

const Dot=({color}) =>{
    const style={
        heght:25,
        width:25,
        margin:"0px 10px",
        backgroundColor:color,
        borderRadius:"50%",
        display:"inline-block",
    };
    return <span style={style}></span>;
};

export const Footer = ({Configuracion}) => {

	const [footerdata,setFooterdata]=useState([]);
    // const [info,setInfo]=useState([]);


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
        <div className='footercontainer'>

            <div className='logocolumn'>
            {
            footerdata.map(footerdata=>(
                <h2 className='NombreTienda' key={footerdata.id}>{footerdata.negocio}</h2>
            ))    
            }
                        {
            footerdata.map(footerdata=>(
                <Dot key={footerdata.id} color={footerdata.color1}/>
                // https://youtu.be/ig91zc-ERSE
            ))    
            }
            </div>

            <div className='columnafooter1'>
                <div>
                    <h2 className='titulofooter'>Dirección</h2>
                    <div>
                    {
                    footerdata.map(footerdata=>(
                        <p key={footerdata.id}>{footerdata.direccionlinea1}</p>
                    ))    
                    }
                    {
                    footerdata.map(footerdata=>(
                        <p key={footerdata.id}>{footerdata.direccionlinea2}</p>
                    ))    
                    }
                    </div>

                </div>

                <div>
                    <h2 className='titulofooter'>Zonas de reparto</h2>
                    <p>Los Olivos</p>
                    <p>Trujillo</p>
                    <p>Comas</p>
                </div>
            </div>

            <div className='columnafooter2'>
                <div>
                    <h2 className='titulofooter'>Horarios de atención</h2>
                    <div className='gridhorario'>
                        <div>
                            <p>Lunes</p>
                            <p>Martes</p>
                            <p>Miercoles</p>
                            <p>Jueves</p>
                            <p>Viernes</p>
                            <p>Sabado</p>
                            <p>Domingo</p>
                        </div>
                        <div>
                           {
                            footerdata.map(footerdata=>(
                                <div className='gridhoras'>
                                    <p key={footerdata.id}>{footerdata.horalunes1}</p> <p className='horadespues' key={footerdata.id}> {footerdata.horalunes2}</p>
                                </div>
                            ))    
                            } 
                            {
                            footerdata.map(footerdata=>(
                                <div className='gridhoras'>
                                    <p key={footerdata.id}>{footerdata.horamartes1} </p> <p className='horadespues' key={footerdata.id}> {footerdata.horamartes2}</p>
                                </div>
                            ))    
                            } 
                            {
                            footerdata.map(footerdata=>(
                                <div className='gridhoras'>
                                    <p key={footerdata.id}>{footerdata.horamiercoles1} </p> <p className='horadespues' key={footerdata.id}> {footerdata.horamiercoles2}</p>
                                </div>
                            ))    
                            }
                            {
                            footerdata.map(footerdata=>(
                                <div className='gridhoras'>
                                    <p key={footerdata.id}>{footerdata.horajueves1} </p> <p className='horadespues' key={footerdata.id}> {footerdata.horajueves2}</p>
                                </div>
                            ))    
                            }
                            {
                            footerdata.map(footerdata=>(
                                <div className='gridhoras'>
                                    <p key={footerdata.id}>{footerdata.horaviernes1} </p> <p className='horadespues' key={footerdata.id}> {footerdata.horaviernes2}</p>
                                </div>
                            ))    
                            }
                            {
                            footerdata.map(footerdata=>(
                                <div className='gridhoras'>
                                    <p key={footerdata.id}>{footerdata.horasabado1} </p> <p className='horadespues' key={footerdata.id}> {footerdata.horasabado2}</p>
                                </div>
                            ))    
                            }
                            {
                            footerdata.map(footerdata=>(
                                <div className='gridhoras'>
                                    <p key={footerdata.id}>{footerdata.horadomingo1} </p> <p className='horadespues' key={footerdata.id}> {footerdata.horadomingo2}</p>
                                </div>
                            ))    
                            }   
                        </div>
                    </div>
                </div>
            </div>

            <div className='columnafooter3'>
                <div>
                    <h2 className='titulofooter'>Formas de pago</h2>
                    <div className='gridpagos'>
                        <div>
                            <img  className='formapagoimg' src={american} alt="american express logo" />
                        </div>

                        <div>
                            <img className='formapagoimg' src={mastercard} alt="mastercard logo" />
                        </div>

                        <div>
                            <img className='formapagoimg' src={visa} alt="visa logo" />
                        </div>

                        <div>
                            <img className='formapagoimg' src={plin} alt="plin logo" />
                        </div>

                        <div>
                            <img className='formapagoimg' src={yape} alt="yape logo" />
                        </div>

                    </div>
                    <h2 className='titulofooter'>Redes Sociales</h2>
                    <div className='redesgrid'>
                        <div>
                            <img className='redesicon' src={whatsapp} alt="whatsapp logo" />
                        </div>

                        <div>
                            <img key={footerdata.id} className='redesicon' src={facebook} alt="facebook logo" />   
                        </div>

                        <div>
                            <img className='redesicon' src={instagram} alt="instagram logo" />
                        </div>

                        <div>
                            <img className='redesicon' src={google} alt="google logo" />
                        </div>
                    </div>
                </div>
            </div>

            

            

        </div>
    )
}
