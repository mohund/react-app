import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Create from './components/create';
import ReadAll from './components/readAll';
import ReadOne from './components/readOne';
import Update from './components/update';
import Delete from './components/delete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read-all" element={<ReadAll />} />
        <Route path="/read-one" element={<ReadOne />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
