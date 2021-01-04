import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const config = {
   apiKey: "AIzaSyAlawx31nuZgW2v4kvvvwRqJMKepUM5cGA",
    authDomain: "lunch-app-16682.firebaseapp.com",
    databaseURL:"https://lunch-app-16682-default-rtdb.firebaseio.com/",
    projectId: "lunch-app-16682",
    storageBucket: "lunch-app-16682.appspot.com",
    messagingSenderId: "123716658555",
    appId: "1:123716658555:web:66538f64e4e85d286749de",
    measurementId: "G-1HX5X96S92"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
