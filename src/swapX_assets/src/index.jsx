import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client";
import { async } from 'q';

const init = async () => { 

  const authClient = await AuthClient.create();


  if(await authClient.isAuthenticated()){
    handleAuthenticated(authClient);
  }else{
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#",
      onSuccess :()=>{
        handleAuthenticated(authClient);
      }
    });
  }

}

async function handleAuthenticated(authClient){
  ReactDOM.render(<App />, document.getElementById("root"));

}

init();


