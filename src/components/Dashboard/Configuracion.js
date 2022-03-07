import React,{useState} from 'react';
import { app } from '../../fb';
import "./Configuracion.css";


const initialConfig={
    negocio:"",
};

const initialDireccion={
    direccionlinea1:"",
    direccionlinea2:"",
}

const initialLunes={
    horalunes1:"",
    horalunes2:"",
}

const initialMartes={
    horamartes1:"",
    horamartes2:"",   
}

const initialMiercoles={
    horamiercoles1:"",
    horamiercoles2:"",   
}

const initialJueves={
    horajueves1:"",
    horajueves2:"",   
}

const initialViernes={
    horaviernes1:"",
    horaviernes2:"",   
}

const initialSabado={
    horasabado1:"",
    horasabado2:"",   
}

const initialDomingo={
    horadomingo1:"",
    horadomingo2:"",   
}


export const Configuracion = () => {

    const [dataInfo,setDataInfo]=useState(initialConfig);

    const [direccion,setDireccion]=useState(initialDireccion);

    const [timeLunes,setTimeLunes]=useState(initialLunes);
    const [timeMartes,setTimeMartes]=useState(initialMartes);
    const [timeMiercoles,setTimeMiercoles]=useState(initialMiercoles);
    const [timeJueves,setTimeJueves]=useState(initialJueves);
    const [timeViernes,setTimeViernes]=useState(initialViernes);
    const [timeSabado,setTimeSabado]=useState(initialSabado);
    const [timeDomingo,setTimeDomingo]=useState(initialDomingo);



    const saveDireccion=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("direcciones")
        .set({...direccion})
        .then(
            console.log("wardado")
        )
    }

    const saveLunes=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("horalunes")
        .set({...timeLunes })
    }

    const saveMartes=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("horamartes")
        .set({...timeMartes })
    }

    const saveMiercoles=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("horamiercoles")
        .set({...timeMiercoles })
    }

    const saveJueves=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("horajueves")
        .set({...timeJueves })
    }

    const saveViernes=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("horaviernes")
        .set({...timeViernes })
    }

    const saveSabado=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("horasabado")
        .set({...timeSabado })
    }

    const saveDomingo=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("horadomingo")
        .set({...timeDomingo })
    }



    const saveInfo=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("nombre")
        .set({...dataInfo})
        .then(
            console.log("wardado")
        )
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
                <h2>Horario de atención de tu negocio</h2>
            </div>
            <div className='horariocontainer'>
                <div className='formhorario'>
                    <form onSubmit={saveLunes}>
                        <label className='labelcontainer'>Lunes</label>
                        <input
                            type="time"
                            onChange={(e)=> setTimeLunes({...timeLunes, horalunes1:e.target.value})}
                        />
                        <input
                            type="time"
                            onChange={(e)=> setTimeLunes({...timeLunes, horalunes2:e.target.value})}
                        />    
                        <button className='BotonPositivo'>Guardar</button>
                    </form>
                </div>

                <div className='formhorario'>
                    <form onSubmit={saveMartes}>
                        <label className='labelcontainer'>Martes</label>
                        <input
                            type="time"
                            onChange={(e)=> setTimeMartes({...timeMartes, horamartes1:e.target.value})}
                        />
                        <input
                            type="time"
                            onChange={(e)=> setTimeMartes({...timeMartes, horamartes2:e.target.value})}
                        />    
                        <button className='BotonPositivo'>Guardar</button>
                    </form>
                </div>

                <div className='formhorario'>
                    <form onSubmit={saveMiercoles}>
                        <label className='labelcontainer'>Miercoles</label>
                        <input
                            type="time"
                            onChange={(e)=> setTimeMiercoles({...timeMiercoles, horamiercoles1:e.target.value})}
                        />
                        <input
                            type="time"
                            onChange={(e)=> setTimeMiercoles({...timeMiercoles, horamiercoles2:e.target.value})}
                        />    
                        <button className='BotonPositivo'>Guardar</button>
                    </form>
                </div>

                <div className='formhorario'>
                    <form onSubmit={saveJueves}>
                        <label className='labelcontainer'>Jueves</label>
                        <input
                            type="time"
                            onChange={(e)=> setTimeJueves({...timeJueves, horajueves1:e.target.value})}
                        />
                        <input
                            type="time"
                            onChange={(e)=> setTimeJueves({...timeJueves, horajueves2:e.target.value})}
                        />    
                        <button className='BotonPositivo'>Guardar</button>
                    </form>
                </div>

                <div className='formhorario'>
                    <form onSubmit={saveViernes}>
                        <label className='labelcontainer'>Viernes</label>
                        <input
                            type="time"
                            onChange={(e)=> setTimeViernes({...timeViernes, horaviernes1:e.target.value})}
                        />
                        <input
                            type="time"
                            onChange={(e)=> setTimeViernes({...timeViernes, horaviernes2:e.target.value})}
                        />    
                        <button className='BotonPositivo'>Guardar</button>
                    </form>
                </div>

                <div className='formhorario'>
                    <form onSubmit={saveSabado}>
                        <label className='labelcontainer'>Sabado</label>
                        <input
                            type="time"
                            onChange={(e)=> setTimeSabado({...timeSabado, horasabado1:e.target.value})}
                        />
                        <input
                            type="time"
                            onChange={(e)=> setTimeSabado({...timeSabado, horasabado2:e.target.value})}
                        />    
                        <button className='BotonPositivo'>Guardar</button>
                    </form>
                </div>

                <div className='formhorario'>
                    <form onSubmit={saveDomingo}>
                        <label className='labelcontainer'>Domingo</label>
                        <input
                            type="time"
                            onChange={(e)=> setTimeDomingo({...timeDomingo, horadomingo1:e.target.value})}
                        />
                        <input
                            type="time"
                            onChange={(e)=> setTimeDomingo({...timeDomingo, horadomingo2:e.target.value})}
                        />    
                        <button className='BotonPositivo'>Guardar</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}







