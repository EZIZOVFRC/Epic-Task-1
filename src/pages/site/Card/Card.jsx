import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/Context'

function Card({item}) {
    const {addToBasket}=useContext(MainContext)
  return (
      <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.price} AZN</p>
    <Link to={`details/${item._id}`}><span>Detail</span></Link>
    <button onClick={()=>{
        addToBasket(item)
    }}>Add To Basket</button>
  </div>
</div>
  )
}

export default Card
