import React,{useState} from 'react'
import { app } from '../../fb'

const initialConfig={
    negocio:"",
    dueno:"",
};

const initialColors={
    color1:"",
    color2:"",
    color3:"",
}

export const Configuracion = () => {

    const [dataInfo,setDataInfo]=useState(initialConfig);
    const [color,setColor]=useState(initialColors);

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
        <div>
            <div>
                <h1>Configuracion</h1>
            </div>

            <div>
                <form onSubmit={saveInfo}>
                    <div className="nombrebox">
                        <label>Nombre del negocio</label>
                        <input
                            type="text"
                            name="negocio"
                            placeholder="nombre del negocio"
                            className="inputForm"
                            onChange={(e) => setDataInfo({ ...dataInfo, negocio: e.target.value })}
                        />
                    </div>
                    <div className="nombrebox">
                        <label>Dueño</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="nombre del dueño"
                            className="inputForm"
                            onChange={(e) => setDataInfo({ ...dataInfo, dueno: e.target.value })}
                        />
                    </div>
                    <button >Guardar</button>
                </form> 
            </div>

            <div>
                <form onSubmit={saveColors}>
                    <label>Color primario</label>
                    <input 
                        type="color" 
                        onChange={(e) => setColor({ ...color, color1: e.target.value })}
                    />
                    <label>Color secundario</label>
                    <input 
                        type="color" 
                        onChange={(e) => setColor({ ...color, color2: e.target.value })}
                    />
                    <label>Color terciario</label>
                    <input 
                        type="color" 
                        onChange={(e) => setColor({ ...color, color3: e.target.value })}    
                    />
                    <button>Guardar</button>
                </form>
            </div>                     
        </div>
    )
}
