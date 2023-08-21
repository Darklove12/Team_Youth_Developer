import React from 'react'
import '../components/Men.css'

const Men= () => {
  const products = [
    { name: 'Brown Jacket',
    price: 'R2500,00',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=495&q=80' },
    { name: 'Suit Jacket',
    price: 'R999,98',
    image: 'https://media.istockphoto.com/id/139871109/photo/chronograph-watch.jpg?s=612x612&w=0&k=20&c=mcVA6QqXnOLBt4LkmlDA7GZBd_4vsAMjBvi7AuElO4Q=' },
    { name: 'Black Coat',
    price: 'R1599,58',
    image: 'https://images.unsplash.com/photo-1638264495209-c522601bf7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
    { name: 'Dark Green Suit',
    price: 'R2599,56',
    image: 'https://images.unsplash.com/photo-1685376104208-fc94af0786e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
    { name: 'Gray Suit',
    price: 'R3496,56',
    image: 'https://images.unsplash.com/photo-1581381685617-4dc270458aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBtZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: 'Jean',
    price: 'R699,65',
    image: 'https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjBtZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: 'Man Bag',
    price: 'R1899,59',
    image: 'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBtZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: 'Rollneck',
    price: 'R10000,99',
    image: 'https://images.unsplash.com/photo-1577709295428-75f3f210bb52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' },

]


return (
<div>
<h1 className='hd-heading'>Men</h1>
<div className="grid-container">
  {
    products.map(product => {
      return (
        <div className="card" >
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <a href="#" className="btn btn-primary">Click on</a>
          </div>
        </div>
      )
    })

  }

</div>
</div>

)

 
  }

export default Men


