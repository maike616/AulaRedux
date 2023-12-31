//import React, { useReducer } from "react";
import "./App.css";
//import { useDispatch, useSelector } from "react-redux";
//import { RootState } from "./redux/store";
//import { increment, decrement, pow } from "./redux/features/count.slice";
import ListagemProdutos from "./components/listProdutos";
import FormularioProduto from "./components/formProduto";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import { fetchProdutos } from "./redux/features/produto.slice";
// npx create-react-app redux_teste --template typescript

function App() {
  const dispatch= useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchProdutos());
  });
   return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
    }}
  >
    <div style={{ width: "50%" }}>
      <FormularioProduto/>
      <ListagemProdutos />
    </div>
  </div>
);


 /* const dispatch = useDispatch();
  const count = useSelector((state: RootState)=> state.count);


  return (
    <div className="App">
      <p>{count.value}</p>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(pow())}>pow</button>
    </div>
  )*/
}

export default App;
