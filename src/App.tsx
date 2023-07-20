import React, { useReducer } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { increment, decrement, pow } from "./redux/features/count.slice";
// npx create-react-app redux_teste --template typescript

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state: RootState)=> state.count);


  return (
    <div className="App">
      <p>{count.value}</p>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(pow())}>pow</button>
    </div>
  )
}

export default App;
