import React from 'react';
import PlacesForm from './components/PlacesForm';
import PlacesMap from './components/PlacesMap';

function App() {
  return (
    <div className="App">
      <h1>Find Places</h1>
      <PlacesForm />
      <PlacesMap />
    </div>
  );
}

export default App;
