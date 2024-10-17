// Categories
import React from 'react';
import './Categories.css';

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        products
        {' '}
        <span>categories</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/product3.jpg" alt="" />
          <h3>dal</h3>
          <p>upto 45% off</p>
    
        </div>

        <div className="box">
          <img src="image/cat1.jpg" alt="" />
          <h3>fresh fruits</h3>
          <p>upto 45% off</p>
          
        </div>

        <div className="box">
          <img src="image/cat3.webp" alt="" />
          <h3>dairy products</h3>
          <p>upto 45% off</p>
      
        </div>
        </div>

<button type='button' className='btn2'>See More</button>
    </section>
  );
}
