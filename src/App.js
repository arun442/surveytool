import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React ,{useState,useEffect } from 'react';
import './App.css';
import Answertab from './Components/Answertab';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from './Components/Summary';
import CodeEditor from './Components/CodeEditor';

function App() {
  return (
    <div className="App">
    <Routes>
           <Route exact path="/quiz" element={<Answertab />}/>
           <Route exact path="/" element={<CodeEditor />}/>
           <Route exact path="/summary" element={<Summary />}/>
           <Route exact path="/dashboard" element={<Dashboard />}/>

         </Routes>
    </div>
  );
}

export default App;
