import React from 'react';

import data from './../data.js';


const ListProducts = ()=>{
  return(
    <>
      <h1>Featured Products</h1>
        {data.products.map(product =>{
            <div>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          })}
    </>
  );
}

export default ListProducts;