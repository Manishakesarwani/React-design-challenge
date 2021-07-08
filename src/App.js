import './App.css';
import Header from './components/header';
import Info from './components/Details';
import React from 'react';



class App extends React.Component {


  render(){
    return (
      <div>
        <Header />
        <Info />
      </div>
    );
  }
}

export default App;
