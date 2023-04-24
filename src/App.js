import logo from './logo.svg';
import './App.css'; import {useDispatch} from 'react-redux'
import { useState } from 'react';
import { decrement, increment } from './redux/counter';
import {useSelector} from 'react-redux'
function App() {
  const value = useSelector(state=>state.counter.value)
  let [counter, setCounter] = useState(0)
  let dispatch = useDispatch()
  return (
    <div className="App">
      {value}
      <br />
      <button onClick={() =>dispatch(increment())}>Increament</button>
      <button onClick={() =>dispatch(decrement())}>Decreament</button>
      <button>Increament By 33</button>
    </div>
  );
}

export default App;
