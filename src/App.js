import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <Greet name = "Quan" lastName = "Le"/> 
      {/* <Greet name = "Cuong"/> 
      <Greet name = "Thinh"/> 
      <Welcome name = "Quan" lastName = "Le"/>    
      <Hello />
      <Counter/>
      <FunctionClick/>
      <ClassClick/> */}
      <EventBind/>
    </div>
  );
}

export default App;
