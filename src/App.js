import About from './components/About';
import {useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Main,Route,Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1600);
} 
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is Enabled","success");
    }
  }

  return (
    <>
    <Main>
      <Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode} />
      <div className="container">
      <Alert alert={alert} />
      </div>
      
      
      <div className="container my-5">
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the text to Analyze below" showAlert={showAlert} mode={mode} /> }>
          </Route>
          <Route exact path='/about' element={<About  mode={mode} />} >
          </Route>
        </Routes>
        
        
      </div>
      
      </Main>
    </>
    
  );
}

export default App;
