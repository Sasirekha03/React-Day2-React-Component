import React from 'react';


function Product() {
  const products = [
    {
      id: 1,
      name: 'Product A',
      price: '$50',
     
    },
    {
      id: 2,
      name: 'Product B',
      price: '$75',
      
    },
    {
      id: 3,
      name: 'Product C',
      price: '$100',
      
    },
  ];
      const content = products.map((products) =>
      <div key={products.id}>
     <h3>{products.name}</h3>
     <p>{products.price}</p>
   </div>
      );

  return (
    
    <div>
      <h2>Featured Products</h2>
       {/*{products.map(product => 
            <p key={product.id} {...product} ></p>
       )}*/}
      <p> {content}</p>
      </div>
    
  );
}

export default Product;