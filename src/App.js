import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





function App(props) {

  const [mode, setMode] = useState('light');
  const [btntype, setbtntype] = useState("btn btn-light mx-2");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, "1000");

  }



    



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0b0e37';
      setbtntype("btn btn-dark mx-1 my-1")
      showAlert(" Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setbtntype("btn btn-light mx-1 my-1")
      showAlert(" Light mode has been enabled", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Text Analyzer" aboutinfo="About Site" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      < div className="container my-5">
        <Routes>
          <Route exacy path="/about" element={<About mode={mode} />}>
          </Route>
          <Route exact path="/" element={<Textform heading="Text Analyzer Tool - Enter text here to analyse" mode={mode} btntype={btntype} />}>
          </Route>
        </Routes>
      </div>
      </Router>
    </>

  );
}

export default App;
