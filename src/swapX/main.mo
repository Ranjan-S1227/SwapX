

import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token{
  Debug.print("Hey");
  var owner: Principal= Principal.fromText("wzo7o-u6ll2-nh4rp-wjf2b-77i7c-mpd4z-c26sp-xgt35-bcktl-6inyo-gae");
  var totalSupply: Nat =1000000000;
  var symbol: Text = "RJN";
  
 

private  var balanceEntries:[(Principal,Nat)]=[];
private var balances = HashMap.HashMap<Principal,Nat>(1,Principal.equal,Principal.hash);
if (balances.size() < 1){
  balances.put(owner,totalSupply);
};





  public query func balanceOf(who: Principal): async Nat {
    let balance : Nat = switch (balances.get(who)) {
  case null 0;
  case (?result) result;
};


return balance;
  };

  public query func getSymbol():async Text {
  return symbol;
};
// We are going to transfer 5B tokens to canisterID, so when ever someone claims new tokens, it will be subtracted from canister.


//msg.caller gives the principalId of the user who called this function.
public shared(msg) func payOut(): async Text {
  Debug.print(debug_show(msg.caller));
  if(balances.get(msg.caller)==null){
    let amount=10000;
    let result= await transfer(msg.caller,amount);
  return result;

  }else{
    return "Already Claimed !"
  }

};

public shared(msg) func transfer(to: Principal, amount: Nat): async Text{
let fromBalance = await balanceOf(msg.caller); 

if (fromBalance > amount){
  let newFromBalance : Nat=  fromBalance-amount;
  balances.put(msg.caller,newFromBalance);

  let toBalance = await balanceOf(to);
  let newToBalance = toBalance+amount;
  balances.put(to,newToBalance);
   

  return "Success";
}
else{
  return "Insufficient Tokens!"; 
}
};
//system calls

system func preupgrade(){
balanceEntries:=Iter.toArray(balances.entries());
};
system func postupgrade(){
balances:=HashMap.fromIter<Principal, Nat>(balanceEntries.vals(),1,Principal.equal,Principal.hash);
if (balances.size() < 1){
  balances.put(owner,totalSupply);
}
};

};