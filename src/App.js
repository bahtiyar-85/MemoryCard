import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Field from './components/Field/Field';
import RegGamer from './components/RegGamer/RegPlayer';
import TopList from './components/TopList/TopList';

const App = () => {
  const [array, setArray] = useState([])
  const [player, setPlayer] = useState('')
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegGamer setArray={setArray} setPlayer={setPlayer}/>} />
          <Route path="/field" element={<Field array={array} setArray={setArray} player={player}/>} />
          <Route path="/list" element={<TopList/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;