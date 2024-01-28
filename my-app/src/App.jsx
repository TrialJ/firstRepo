
import './App.css';
import {useState} from 'react';


  function Stateful() {
    const [state, setState] = useState({ count: 0, user: ['Holly','Matti','Julius' ]});
  
    const handleClick = () => {
      setState({
        ...state,
        count: state.count + 1,
      });
    };
  
    return (
      <>
        <h3>Count: {state.count}</h3>
        <h3>User: {state.user[state.count]}</h3>
        <button onClick={handleClick}>Increment</button>
      </>
    );
  }










function App() {
  return (
    <div className="App">
      <Stateful/>
    </div>
  );
}

export default App;
