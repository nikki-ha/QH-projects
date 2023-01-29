import './styles/App.css'
import HomeScreen from './screens/home.js';
import NavbarComp from './components/NavComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PostScreen from './screens/post';
import SearchScreen from './screens/search';

function App() {
  return (
    <div className="App">
      <PostScreen/>
    </div>
  );
}

export default App;
