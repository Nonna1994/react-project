import './App.css';
// import User from './User.js';
import Product from './homework-6/Product';
import ToDo from './homework-8/ToDo';



function App() {
  return (
    <div className="App">
      
      <ToDo/>

      <Product
      name=" Bananas "
      price=" 1 "
      description=" Fresh banans from Ecuador"
      />


      {/* <User
        name="Ann"
        birthYear="1994"
      />


      <User
        name="Davit"
        birthYear="1998"
      /> */}

    </div>
  );
}

export default App;
