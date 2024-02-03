import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello'
import CounterHook from './components/CounterHook';

export const MyContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');
  return (
    <MyContext.Provider value={{backgroundColor: theme}}>
      Counter
      <Welcome initialCount={0} />
      CounterHook
      <CounterHook initialCount={0} />
      
      <button onClick={() => {setTheme(theme === 'red' ? 'blue' : 'red')}}>Toggle</button>
    </MyContext.Provider>
    
  );
}

export default App;
