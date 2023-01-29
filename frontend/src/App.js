import './styles/App.css'
// import HomeScreen from './screens/home.js';
import NavbarComp from './components/NavComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PostScreen from './screens/post';
import BrowseScreen from './screens/browse';
import HomeScreen from './screens/home';

function App() {
  return (
    <div className="App">
      <PostScreen/>
    </div>
  );
}

export default App;
