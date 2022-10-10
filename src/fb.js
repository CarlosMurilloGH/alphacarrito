import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage";
import {getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, deleteDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function userExists(uid){
	//buscamos en la base de datos, en la carpeta users el campo uid
    const docRef = doc(db,"users", uid);
	//mandamos a buscar el documento que tengan el uid con cierto valor
    const res = await getDoc(docRef);
    console.log(res);
	//firebase tiene la consulta exist, que nos retorna true or false
    return res.exists();
}

export async function existsUsername(username){
	const users=[];
	const docsRef=collection(db,"users");
	const q = query(docsRef, where("username","==", username));
  
	const querySnapshot = await getDocs(q);
  
	querySnapshot.forEach((doc) =>{
	  users.push(doc.data());
	})
	return users.length > 0 ? users[0].uid : null;
  }

  export async function registerNewUser(user){
	try {
	  const collectionRef = collection(db, "users");
	  const docRef = doc(collectionRef, user.uid);
	  await setDoc(docRef, user);
	} catch (error) {
	  console.log(error)
	}
  }

  export async function getUserInfo(uid){
	try {
	  const docRef=doc(db, "users", uid);
	  const document = await getDoc(docRef);
	  return document.data();
	} catch (error) {
	  console.log(error)
	}
  }