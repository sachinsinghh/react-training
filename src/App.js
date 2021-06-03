import Navbar from './components/Navbar'
import BootstrapCarousel from './components/BootstrapCarousel'
import {carousel} from 'react-bootstrap'
import data from './components/data'
import CakeList from './components/Cakelist'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import PageNotFound from './components/PageNotFound'
import React, { useState } from "react"
import { BrowserRouter, Route,Switch } from 'react-router-dom'


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
   
    <BrowserRouter>
    <Navbar check={login} details={details}></Navbar>
    <Switch>
    <Route exact path="/"> <Home/></Route>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/*" component={PageNotFound}/>
    </Switch>

    {/* <BootstrapCarousel></BootstrapCarousel> 
    <Signup></Signup>
    <Login checkState={updateLoginState}></Login>
    <CakeList cake={data}></CakeList> */}
    </BrowserRouter>
  
 

   
   

    </>
  );
}

export default App;
