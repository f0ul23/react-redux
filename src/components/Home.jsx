import React from 'react'

export default function Home() {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://static.vecteezy.com/system/resources/previews/000/499/373/original/cart-icon-design-vector.jpg" alt="cart" />
        </div>
      <h1>HomeContainer</h1>
      <div className='cart-wrapper'>
            <div className="img-wrapper item">
                <img src="https://m.media-amazon.com/images/I/714aupYQsaL._SL1500_.jpg" alt="Samsung z-flip" />
            </div>
            <div className="text-wrapper item">
                <span>Z-flip</span><br />
                <span>Price: $5670</span>
            </div>
            <div className="btn-wrapper item">
                <button>Add to cart</button>
            </div>
      </div>
    </div>
  )
}
