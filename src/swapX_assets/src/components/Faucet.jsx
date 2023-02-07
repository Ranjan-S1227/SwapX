import React, { useState } from "react";
import { swapX } from "../../../declarations/swapX/index";


function Faucet() {
  const[isDisabled,setDisable]=useState(false);
  const [btn_txt, setBtn_txt]=useState("Get");

  async function handleClick(event) {
    setDisable(true);
    setBtn_txt(await swapX.payOut());

    
  }

  return (
    <div className="blue window">
      <h2>
        
        Faucet
      </h2>
      <label>Get your free <span style={{color:"red"}}>Ranjan</span>tokens here! Claim <span style={{color:"red"}}>10,000 RJN</span> tokens to your account.</label>
      <p className="trade-buttons">
        <button disabled={isDisabled} id="btn-payout" onClick={handleClick}>
          {btn_txt}
        </button>
      </p>
      <p style={{color:"grey"}}>2vxsx-fae</p>
    </div>
  );
}

export default Faucet;
