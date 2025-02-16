import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log('Starting to fetch data...');
    axios.get<Product[]>('http://localhost:3001/api/products')
      .then(response => {
        console.log('Data received:', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Simple Shop</h1>
      <div>
        {products.map(product => (
          <div key={product.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;