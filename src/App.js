import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Field from './components/Field/Field';
import RegGamer from './components/RegGamer/RegPlayer';

const App = () => {
  const [array, setArray] = useState([])
  const [player, setPlayer] = useState('')
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegGamer setArray={setArray} setPlayer={setPlayer}/>} />
          <Route path="/field" element={<Field array={array} setArray={setArray} player={player}/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;