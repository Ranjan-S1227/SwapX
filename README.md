
# To Deploy

1. Find out your principal id:

```
dfx identity get-principal
```

2. Replace the <REPLACE WITH YOUR PRINCIPAL> in main.mo with the principal you got from step 1.

```
  let owner : Principal = Principal.fromText("<REPLACE WITH YOUR PRINCIPAL>");
```

3. Open up a new terminal in this VSCode project and deploy the token canister:

```
dfx deploy
```

4. Start the frontend:

```
npm start
```

5. Set the canister id to a local variable:

```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id swapX )\""
```

6. Transfer half a billion tokens to the canister Principal ID:

```
dfx canister call swapX transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

7. Claim the tokens from the faucet on the frontend website.

8. Get swapX canister id:

```
dfx canister id swapX
```


# Images
<img width="1440" alt="Screenshot 2023-02-07 at 7 47 59 PM" src="https://user-images.githubusercontent.com/76945354/217273879-a7a870e9-4e2c-4b66-86c9-3896ebbd6a8b.png">
<img width="1440" alt="Screenshot 2023-02-07 at 7 48 12 PM" src="https://user-images.githubusercontent.com/76945354/217273963-49f74810-6725-4c16-8d8c-3ffbb1368810.png">
<img width="1440" alt="Screenshot 2023-02-07 at 7 48 40 PM" src="https://user-images.githubusercontent.com/76945354/217274059-1a47d0b7-1dc6-448d-8baf-471a76b6cde5.png">



