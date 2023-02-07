import React, { useState } from "react";
import { swapX} from "../../../declarations/swapX";
import { Principal } from "@dfinity/principal";

function Transfer() {
  const[recpID, setID]=useState("");
  const [amount,setAmount]=useState("");
  const [isDisabled,setDisable]=useState(false);
  const [feedback, setFeedback]=useState("");
  const [isHidden, setHidden]=useState(true);

  async function handleClick() {
    setHidden(true);
    setDisable(true);
    const recipientID=Principal.fromText(recpID);
    const transferAmount=Number(amount)
    const result = await swapX.transfer(recipientID,transferAmount);
    setFeedback(result); 
    setHidden(false);
    setDisable(false);
    
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recpID}
                onChange={(e)=>setID(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button disabled={isDisabled} id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
