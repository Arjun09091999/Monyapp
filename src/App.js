
import React from "react";
import nav from "./pages/nav";
import contact from "./pages/contact";
import credit from "./pages/credit";
import Emi from "./pages/Emi"; 
import Loan from "./pages/Loan";
import Login from "./pages/Login";
import { Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav />
       
       <Router>
        <Route path="/Loan" element={<loan/>} />
        <Route path="/Emicalculator" element={<emi/>} />
        <Route path="/credittraker" element={<credit/>} />
        <Route path="/contactus" element={<contact/>} />
       </Router>
    </div>
  );
}

export default App;
