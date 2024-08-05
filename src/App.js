import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }
  const switchMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enable","success")
      document.title = 'TextUtils - dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enable","success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} switchMode={switchMode}/>
    <Alert alert={alert}/>
    <div className="Container">
      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route exact path="/">
          <TextForm showAlert={showAlert} mode={mode}/>
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
