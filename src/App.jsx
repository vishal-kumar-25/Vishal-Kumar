import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects";
import  Form  from "./components/Form"; 

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Form/>
  
    


   </div>
  );
}

export default App
