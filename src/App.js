import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
     {counter}
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>

     {isLogged && <h3>Hidden info</h3>}
    </div>
  );
}

export default App;
