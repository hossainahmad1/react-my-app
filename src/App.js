import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers() {
  // 1.
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState([]);
  // 2.
  // useEffect(() => { }, [])
  // useEffect(() => { }, [])

  // 3.
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h2>External Users</h2>
      <h2>{users.length}</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>

  )
}
function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h3>name:{props.name}</h3>
      <p>name:{props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55);


  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }


  // const increaseCount = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }


  return (
    <div>
      <h1>Count:</h1>
      <button onClick={increaseCount} >Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}



/*
const products = [
  { name: 'laptopo', price: '155000' },
  { name: 'phone', price: '95000' },
  { name: 'watch', price: '5000' },
  { name: 'tablet', price: '8000' }
];

 {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="laptop" price="55000"></Product>
      <Product name="phone" price="4900"></Product>
      <Product name="watch" price="3500"></Product>

*/




function Product(props) {
  return (
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>price:{props.price}</p>
    </div>
  )
}

export default App;
