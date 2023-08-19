import React, { useEffect, useState } from 'react'
import '../App.css'

const CartList = ({cart}) => {
    const [CART,setCART] = useState([])
    console.log(CART)
    useEffect(()=>{
        setCART(cart)
    },[cart])
  return (
    <div>
        {
            CART ?.map((cartItem,cartIndex)=>{
                return(
                    <div className='cart-item'>
                        <img src={cartItem.url} width={100} alt='error'/>
                        <span>{cartItem.name}  </span>
                        <button onClick={()=>{
                            const _CART = CART.map((item,index)=>{
                                console.log(index)
                                return cartIndex ===index ? {...item,quantity:item.quantity - 1} : item
                            })
                            setCART(_CART)
                        }}>-  </button>
                        <span>{cartItem.quantity}  </span>
                        <button onClick={()=>{
                            const _CART = CART.map((item,index)=>{
                                return cartIndex ===index ? {...item,quantity:item.quantity + 1} : item
                            })
                            setCART(_CART)
                        }}>+  </button>
                        <span>{cartItem.price * cartItem.quantity}  </span>

                    </div>
                )
            })
        }
        <p> Total :
            {
                CART.map(item => item.price * item.quantity).reduce((total,value)=> total + value ,0
                )
            }
        </p>
    </div>
  )
}

export default CartList