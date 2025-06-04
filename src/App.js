import React from 'react';
import './App.css';

// ProductCard Component
function ProductCard({ name, price }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <button style={styles.button}>Buy Now</button>
    </div>
  );
}

// Styles
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    width: '250px',
    margin: '20px auto',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Arial',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

// App Component
function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Product Store</h1>
      <ProductCard name="Smartphone" price={12999} />
      <ProductCard name="Headphones" price={2499} />
    </div>
  );
}

export default App;
