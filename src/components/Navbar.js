import {useState} from 'react'

let Navbar = (props) => {
   let searchString = "kuch bhi search karo test"
    let seachClick= (event) => {
        event.preventDefault()
   
        searchString = "search kar liya";
        console.warn(searchString);
       
    }

    let getSearchText = (event) => {
            event.preventDefault()
            searchString = event.target.value
    

    }

    let login = () => {
 

    }
    let logout = () => {
      // props.check= !props.check
    
    }
  

    return (
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">{props.details.projectname}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">{props.details.username}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
    
    </ul>
    <div style={{ padding: "0 2%" }}>
      {!props.check?<button onClick={login}  className="btn btn-outline-success my-2 my-sm-0" type="button">Login</button>:''}
    
      {props.check?<button onClick={logout}  className="btn btn-outline-success my-2 my-sm-0" type="button">Logout</button>:''}
    
      
    </div>
    <form className="form-inline my-2 my-lg-0">
    
      <input onChange={getSearchText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
     
      <button onClick={seachClick} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
   
    </form>
  </div>
</nav>
    )
}
export default Navbar