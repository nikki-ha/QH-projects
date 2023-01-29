import './styles/App.css'
import AffiliatesScreen from './screens/affiliates';
import HomeScreen from './screens/home.js';

function App() {
  return (
    <div className="App">
      <h1 id="title">QXR</h1>
      {<AffiliatesScreen/>}
    </div>
  );
}

export default App;
