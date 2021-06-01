function cakelist(props) {
  
    if(props.cake) {
        return (
          <div style={{ display:"flex"}}>
              {props.cake.map((each,index)=> {
           
return (<div   key={index} class="card" style={{ width: "18rem",padding: '1% 1%' }}>
  <img className="card-img-top" style={{ height:"10rem" }} src={each.image} alt="Card image cap" />
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
export default cakelist