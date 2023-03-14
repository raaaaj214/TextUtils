import './components/TextForm.css'
import React ,{ useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

import Alert from './components/Alert';


function App() {
  
  // const [checked,setChecked] = useState(false);
  const [Modetype,setModeType] = useState('default');

    const showMode = (event) =>
    {
      console.log(event.target.innerText);
      if(event.target.innerText === 'default')
      {
        setModeType('default');
        console.log(Modetype);
      }
    }
  const [Mode,setMode] = useState({
    backgroundColor : 'light',
    color : 'black'
  });
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>
  {
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () =>
  {
    if(Mode.backgroundColor === 'light')
    {
              setMode({
                backgroundColor : 'dark',
                color : 'white'
              });

            
              console.log('hello3');
              document.body.style.backgroundColor = '#3B3C36'; 
              document.body.style.color = 'white'; 
              document.title = 'TextUtils - Dark Mode';

      showAlert('Dark mode has been enabled', 'success');
    }
    else
    {
      setMode({
        backgroundColor : 'light',
        color : 'black'
      });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Dark mode has been disabled', 'success');
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
      
    <>
      <Navbar title = "TextUtils" firstValue='Home' secondValue='About' mode={Mode} toggle={toggleMode} modetype={showMode}/>
    <Alert alert ={alert}/>
     <div className="container my-3">
     <TextForm alert={showAlert} heading='Enter text to analyze' mode={Mode}/>
    </div>
    </>
  );
}

export default App;

    