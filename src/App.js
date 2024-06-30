import React from 'react';
import PlacesForm from './components/PlacesForm';
import PlacesMap from './components/PlacesMap';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <PlacesForm />
      <PlacesMap />
    </div>
  );
}

export default App;
