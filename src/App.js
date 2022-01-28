import './App.css';
import { useSelector , useDispatch } from "react-redux";
import { incNumber, decNumber } from './actions/index'

function App() {
    const myState = useSelector((state) => state.changeTheNumber);

    const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment / Decrement Counter</h1>
      <h4>Using React & Redux</h4>
      <div>
        <input type="text" value={myState} />
        <br />
        <button onClick={() => dispatch(decNumber(10))}>Decrement</button>
        <button onClick={() => dispatch(incNumber(10))}>Increment</button>
      </div>
    </div>
  );
}

export default App;
