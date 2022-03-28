import React,{useState} from 'react';
import { app } from '../../fb';
import "./Configuracion.css";

// import { onSnapshot,collection } from 'firebase/firestore';

const initialConfig={
    negocio:"",
};

const initialDireccion={
    direccionlinea1:"",
    direccionlinea2:"",
}

const initialnumero={
    numeronegocio:"",
}



export const Configuracion = () => {

    const [dataInfo,setDataInfo]=useState(initialConfig);
    const [direccion,setDireccion]=useState(initialDireccion);
    const [numeroNegocio,setNumeroNegocio]=useState(initialnumero);


    const saveDireccion=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("direcciones")
        .set({...direccion})

    }

    const saveNumero=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("numerodelnegocio")
        .set({...numeroNegocio })
    }

    const saveInfo=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("nombre")
        .set({...dataInfo})

    }



    return (
        <div className='configuracioncontainer'>
            <div>
                <h1 className="titulos">Configuracion</h1>
            </div>

            <div className='inputformcontainer'>
                <form onSubmit={saveInfo}>
                    <div className="nombrebox">
                        <p>Nombre del negocio</p>
                        <input
                            type="text"
                            name="negocio"
                            placeholder="nombre del negocio"
                            className="inputForm"
                            onChange={(e) => setDataInfo({ ...dataInfo, negocio: e.target.value })}
                        />
                    </div>
                 
                    <button className='BotonPositivo'>Guardar</button>
                </form> 
            </div>

            <div>
                <h2 className="titulos">Información de tu negocio</h2>
            </div>

            <div className='inputformcontainer'>
                <form onSubmit={saveDireccion}>
                    <div className="nombrebox">
                        <p>direccion del negocio linea 1</p>
                        <input
                            type="text"
                            name="negocio"
                            placeholder="nombre del negocio"
                            className="inputForm"
                            onChange={(e) => setDireccion({ ...direccion, direccionlinea1: e.target.value })}
                        />
                    </div>
                    <div className="nombrebox">
                        <p>direccion del negocio linea 2</p>
                        <input
                            type="text"
                            name="negocio"
                            placeholder="nombre del negocio"
                            className="inputForm"
                            onChange={(e) => setDireccion({ ...direccion, direccionlinea2: e.target.value })}
                        />
                    </div>
                 
                    <button className='BotonPositivo'>Guardar</button>
                </form> 
            </div>

            <div>
                <h2 className="titulos">Número de WhatsApp de tu negocio</h2>
            </div>
            
            <div className='inputformcontainer'>
                    <form onSubmit={saveNumero}>
                        <div className="nombrebox">
                            <label className='labelcontainer'>Número de WhatsApp del negocio</label>
                            <input
                                type="tel"
                                className="inputForm"
                                onChange={(e)=> setNumeroNegocio({...numeroNegocio, numeronegocio:e.target.value})}
                            />
                        </div>
                        <button className='BotonPositivo'>Guardar</button>
                    </form>                
            </div>

        </div>
    )
}







