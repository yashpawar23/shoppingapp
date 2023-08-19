import React from 'react'
import '../App.css';


const ProductList = ({product,addToCart}) => {
  return (
    <div className='flex'>
        {
            product.map((productItem,productIndex)=>{
                console.log(productItem)  // all product  in productItem
                return(
                    <div style={{width:'50%'}}>
                        <div className='product-item'>
                        <img src={productItem.url} width='50%' ></img>
                        <p>{productItem.name} | {productItem.category}</p>
                        <p>{productItem.seller}</p>
                        <p>Rs-{productItem.price}/-</p>
                        <button onClick={()=>addToCart(productItem)}>AddTo Cart</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductList