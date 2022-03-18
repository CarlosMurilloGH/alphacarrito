import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";

export const app = firebase.initializeApp({
	apiKey: "AIzaSyDkyH0uECtH6cPEDvPbj1n553R5mQl92OE",
	authDomain: "catalogowspdemo.firebaseapp.com",
	projectId: "catalogowspdemo",
	storageBucket: "catalogowspdemo.appspot.com",
	messagingSenderId: "596512282653",
	appId: "1:596512282653:web:474aadd73d6d254ba9cef4",
	measurementId: "G-JS8Q7ZRM96"
});


export const auth = getAuth(app);



