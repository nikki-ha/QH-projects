import './styles/App.css'
import HomeScreen from './screens/home.js';
import NavbarComp from './components/NavComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PostScreen from './screens/post';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
    </div>
  );
}

export default App;
