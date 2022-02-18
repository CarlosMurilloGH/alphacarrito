import React,{useState} from 'react';
import { app } from '../../fb';
import "./Configuracion.css";


const initialConfig={
    negocio:"",
};

const initialColors={
    color1:"",
}

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

const initialWsp={
    wsplink:"",
}

const initialFb={
    facebooklink:"",
}

export const Configuracion = () => {

    const [dataInfo,setDataInfo]=useState(initialConfig);
    const [color,setColor]=useState(initialColors);

    const [direccion,setDireccion]=useState(initialDireccion);

    const [timeLunes,setTimeLunes]=useState(initialLunes);
    const [timeMartes,setTimeMartes]=useState(initialMartes);
    const [timeMiercoles,setTimeMiercoles]=useState(initialMiercoles);
    const [timeJueves,setTimeJueves]=useState(initialJueves);
    const [timeViernes,setTimeViernes]=useState(initialViernes);
    const [timeSabado,setTimeSabado]=useState(initialSabado);
    const [timeDomingo,setTimeDomingo]=useState(initialDomingo);

    const [wspLink,setWspLink]=useState(initialWsp);
    const [facebookLink,setFacebookLink]=useState(initialFb);




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

    const saveWsp=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("wsplink")
        .set({...wspLink })
    }

    const saveFacebook=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("facebookLink")
        .set({...facebookLink })
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

    const saveColors=async(e)=>{
        e.preventDefault();
        app
        .firestore()
        .collection("configuracion")
        .doc("colores")
        .set({...color})
        .then(
            console.log("wardado")
        )
    }


    return (
        <div className='configuracioncontainer'>
            <div>
                <h1 className="titulos">Configuracion</h1>
            </div>

            <div>
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
                <h2>Footer</h2>
            </div>

            <div>
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
                <form onSubmit={saveLunes}>
                    <label>Lunes</label>
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

            <div>
                <form onSubmit={saveMartes}>
                    <label>Martes</label>
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

            <div>
                <form onSubmit={saveMiercoles}>
                    <label>Miercoles</label>
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

            <div>
                <form onSubmit={saveJueves}>
                    <label>Jueves</label>
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

            <div>
                <form onSubmit={saveViernes}>
                    <label>Viernes</label>
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

            <div>
                <form onSubmit={saveSabado}>
                    <label>Sabado</label>
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

            <div>
                <form onSubmit={saveDomingo}>
                    <label>Domingo</label>
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


            <div>
                <h2>Redes Sociales</h2>
            </div>

            <div>
                <form onSubmit={saveWsp}>
                    <div className="nombrebox">
                        <p>Tu Número de whatsapp</p>
                        <input
                            type="text"
                            name="negocio"
                            placeholder="nombre del negocio"
                            className="inputForm"
                            onChange={(e) => setWspLink({ ...wspLink, wsplink: e.target.value })}
                        />
                    </div>
                 
                    <button className='BotonPositivo'>Guardar</button>
                </form> 
            </div>

            <div>
                <form onSubmit={saveFacebook}>
                    <div className="nombrebox">
                        <p>Tu link de facebook</p>
                        <input
                            type="text"
                            name="negocio"
                            placeholder="nombre del negocio"
                            className="inputForm"
                            onChange={(e) => setFacebookLink({ ...facebookLink, facebooklink: e.target.value })}
                        />
                    </div>
                 
                    <button className='BotonPositivo'>Guardar</button>
                </form> 
            </div>

            <div>
                <h2>Colores</h2>
            </div>

            <div>
                <form onSubmit={saveColors}>
                    
                    <div className='colorselector'>
                        <label>Color primario </label>
                        <input 
                            type="color" 
                            onChange={(e) => setColor({ ...color, color1: e.target.value })}
                        />
                    </div>

                    <div className='colorselector'>
                        <label>Color secundario </label>
                        <input 
                            type="color" 
                            onChange={(e) => setColor({ ...color, color2: e.target.value })}
                        />
                    </div>

                    <div className='colorselector'>
                        <label>Color terciario </label>
                        <input 
                            type="color" 
                            onChange={(e) => setColor({ ...color, color3: e.target.value })}    
                        />
                   </div>

                    <button className='BotonPositivo'>Guardar</button>
                </form>
            </div>                     
        </div>
    )
}







