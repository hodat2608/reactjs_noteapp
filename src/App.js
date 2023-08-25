import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import NoteList from './pages/NoteList'
import NotePages from './pages/NotePages'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
        <Header />
        <Routes>
          <Route path="/all_note/" element={<NoteList/>} />
          <Route path="/action/:id" element={<NotePages/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
