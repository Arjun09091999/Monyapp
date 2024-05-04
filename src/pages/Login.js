import React from "react";
import { Link } from "react-router-dom";


function Login(){
    return(
        <div className="login">
              <div id="inputdiv1">
                <input id="input1" placeholder="Write your name or phone number" type="text" />
              </div>
              <div id="inputdiv2">
                <input id="input2" placeholder="Password" type="text" />
              </div>
              <button id="btn">Submit</button>
              <p id="forget"> <Link>Forget Password</Link> </p>

        </div>
    )
}

export default Login;