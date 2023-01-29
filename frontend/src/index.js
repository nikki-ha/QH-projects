import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// FIREBASE
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseApp = initializeApp({ /* config */ });
const db = getFirestore(firebaseApp);

const firebaseConfig = {
  apiKey: "AIzaSyC28XqleHy0olwTBHUIDXssk1HApck4X78",
  authDomain: "qxrs-d4ac5.firebaseapp.com",
  projectId: "qxrs-d4ac5",
  storageBucket: "qxrs-d4ac5.appspot.com",
  messagingSenderId: "571907215372",
  appId: "1:571907215372:web:6432526198db40dabb5e29",
  measurementId: "G-Z1VMMV018M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
