import React,{useState,useEffect} from 'react';
import "./HeaderTienda.css";
import { app } from '../../fb';

export const HeaderTienda = () => {

	const [info,setInfo]=useState([]);
  
	
    const getInfo = () => {
		app
			.firestore()
			.collection("configuracion")
			.get()
			.then((querySnapshot) => {
				const data = [];
				querySnapshot.forEach((doc) => {
					data.push({ ...doc.data(), id: doc.id });
				});
				setInfo(data);
				console.log(data[0].color3);

			})
			.catch((err) => console.error(err));
	};


    useEffect(() => {
		getInfo();
	}, []);


    return (
        <div className='headertienda'>
			<div className='headerbox'>
			{
            info.map(info=>(
                <h1 className='NombreTienda' key={info.id}>{info.negocio}</h1>
            ))    
            }
			</div>

        </div>
    )
}
