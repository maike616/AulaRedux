import { useState } from "react";
import { Button } from "reactstrap";
import "./index.css";
import { doLogin } from "../../redux/features/api.login.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
//import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  function TryLogin(){
    dispatch(
        doLogin({
            email:email,
            password:password,
        })
    )
  }

  return (
    <form style={{ width: "300px" }} className="container">
      <div>
        <h6>Loja Virtual</h6>
      </div>

      <input placeholder="Digite seu email" onChange={(e)=>SetEmail(e.target.value)}/>
      <input placeholder="Digite sua senha" onChange={(e)=>SetPassword(e.target.value)}/>

      <Button onClick={()=>TryLogin()}>Login</Button>
    </form>
  );
}