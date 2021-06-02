import axios from 'axios'
import React, { useState, useEffect } from "react"

let Cakelist = (props) => {

  let [cake, setCake] = useState([]);

  useEffect(() => {
    axios(
      {
        method: 'get',
        url: 'https://Apibyashu.herokuapp.com/api/allcakes',
        data: JSON
      }
    ).then((response) => {

      setCake(response.data.data)

    }, (error) => {
      console.log('error'.error)
    })
  }, []);

  if (cake) {
    return (
      <div className="row" style={{ justifyContent: "space-around", padding: "0 2%" }}>

        {cake.map((each, index) => {

          return (<div key={each.cakeid} className="card" style={{ width: "18rem", padding: '1% 2%' }}>
            <img className="card-img-top img-responsive" style={{ height: "10rem" }} src={each.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{each.name}</h5>
              <p className="card-text">Rs {each.price}</p>

            </div>
          </div>)
        })}
      </div>

    )
  }
  else {
    return null
  }

}
export default Cakelist