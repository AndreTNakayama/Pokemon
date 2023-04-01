import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Routes>
      <Route path="/pokemon">
        <Route path=":pokemonId" element = {<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
