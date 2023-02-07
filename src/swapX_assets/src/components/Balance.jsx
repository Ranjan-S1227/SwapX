import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { swapX } from "../../../declarations/swapX/index";

function Balance() {

  const [inputVal,setInput]=useState("");
  const[balanceResult, setBalance]=useState("");
  const [symbol,updateSymbol]=useState("");
  const [isHidden, setHidden]=useState(true);
  
  async function handleClick() {
    const principal = Principal.fromText(inputVal);
    const balance= await swapX.balanceOf(principal);
    setBalance(balance.toLocaleString());
    updateSymbol(await swapX.getSymbol());
    setHidden(false);

  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputVal}
          onChange={(e)=>setInput(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance 
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of <span style={{color:"green"}}>{balanceResult} {symbol}</span></p>
    </div>
  );
}

export default Balance;
