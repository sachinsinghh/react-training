import Navbar from './components/Navbar'
import BootstrapCarousel from './components/BootstrapCarousel'
import {carousel} from 'react-bootstrap'
import data from './components/data'
import CakeList from './components/Cakelist'
import Login from './components/Login'
import Signup from './components/Signup'
import React, { useState } from "react"


function App() {
  var details= {
    'projectname':'MyCake',
    'username':'Sachin Singh',
    'isAuthenitcated': false
  }
  var [login,setLogin] = useState(false)

  let updateLoginState = () => {
    setLogin(true)
    
  }

  

 
  return (
    <>
   
    <Navbar check={login} details={details}></Navbar>

    <BootstrapCarousel></BootstrapCarousel> 
    <Signup></Signup>
    <Login checkState={updateLoginState}></Login>
    <CakeList cake={data}></CakeList>
  
 

   
   

    </>
  );
}

export default App;
