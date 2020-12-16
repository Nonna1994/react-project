import './App.css';
import User from './User.js';


function App() {
  return (
    <div className="App">
      Hello Everyone,

      <User
        name="Ann"
        birthYear="1994"
      />


      <User
        name="Davit"
        birthYear="1998"
      />

    </div>
  );
}

export default App;
