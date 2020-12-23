import logo from './logo.svg';
import './App.css';
import Geolocation from 'react-geolocation'

function App() {
  return (
    <div className="App">
    <Geolocation
render={({
  fetchingPosition,
  position: { coords: { latitude, longitude } = {} } = {},
  error,
  getCurrentPosition
}) =>
  <div>
    <button onClick={getCurrentPosition}>Get Position</button>
    {error &&
      <div>
        {error.message}
      </div>}
    <pre>
      Latitude: {latitude}<br/>
      Longitude: {longitude}
    </pre>
  </div>}
/>
    </div>
  );
}

export default App;
