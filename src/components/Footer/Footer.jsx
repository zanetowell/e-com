import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ullam perspiciatis voluptatum eos maxime laudantium. Illum, enim! Explicabo, mollitia sequi?</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis modi possimus sit veritatis unde et quaerat, tempore veniam facere aliquid necessitatibus nemo vero beatae sint ratione, aut voluptas aliquam commodi vitae, sequi repellat? Voluptatibus.</span>
        </div>
      </div>
      
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>Website</span>
          <span className='copyright'>
          © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className='right'>
          <img src='/imgs/payment.png' alt='payment' />
        </div>
      </div>
    </div>
  )
}

export default Footer