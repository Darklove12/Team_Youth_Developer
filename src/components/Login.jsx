import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import "../components/Login.css";
import NeighborhoodLogin from "./NeighborhoodLogin";

function Login() {
  const [user, password] = useContext(AppContext);

  const [usernameT, setUsernameT] = useState("");
  const [passwordT, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsernameT(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function Login() {
    if (user === usernameT && password === passwordT) {
      navigate("/home");
    }
  }

  return (
    // <>
    //     <form>
    //         <div className="form-group">
    //             <label htmlFor="exampleInputEmail1">Email address</label>
    //             <input type="email"
    //                 className="form-control"
    //                 id="exampleInputEmail1"
    //                 aria-describedby="emailHelp"
    //                 placeholder="Enter email"
    //                 value={usernameT}
    //                 onChange={handleUsernameChange}
    //             />
    //         </div>

    //         <div className="form-group">
    //             <label htmlFor="exampleInputPassword1">Password</label>
    //             <input type="password"
    //                 className="form-control"
    //                 id="exampleInputPassword1"
    //                 placeholder="Password"
    //                 value={passwordT}
    //                 onChange={handlePasswordChange}

    //             />
    //         </div>

    //         <button type="submit" className="btn btn-primary" onClick={Login}>Submit</button>
    //     </form>
    // </>

   <NeighborhoodLogin/>
  );
}

export default Login;
