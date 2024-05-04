import React from "react";
import { Link } from "react-router-dom";


function Loan(){
    return(
        <div className="loan">
            <li> <Link>Interst Rate</Link> </li>
            <li> <Link>Eligible Craitria</Link> </li>
            <li> <Link>Document Requreied</Link> </li>
            <li> <Link>How to Apply</Link> </li>

        </div>
    )
}

export default Loan;