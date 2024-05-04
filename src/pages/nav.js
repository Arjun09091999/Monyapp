import React from "react";
import { Link } from "react-router-dom";
import contact from "./contact";
import credit from "./credit";
import Emi from "./Emi";
import Loan from "./Loan";
import Login from "./Login";




function nav(){
    return(
        <>
        <div id="nav">
                  <div> <img src="https://entrackr.com/storage/2022/11/Moneyview.jpg" alt="money view logo" /> </div>
                  <Link to='/Loan'>Loan</Link>
                  <Link to='/Emi'>Emi Calculator</Link>
                  <Link to='/credit'>Credit Traker</Link>
                  <Link to='/contact'>Contact Us</Link>
                  <Link to='/Login'>Login</Link>


        </div>
        </>
    )
}

export default nav;