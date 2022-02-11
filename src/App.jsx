import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

    const [login, setLogin]= useState("")
    const [password, setPassword]=useState("")



const handleGoogle = async ()=>{
const googleLogin = await fetch("http://localhost:3001/authors/googleRedirect")
console.log(googleLogin)
}

const handleLogin = async()=>{
    const data={password:{password}, login:{login}}
    await fetch("http://localhost:3001/authors/login", {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
          
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data)
      })
}


    return ( <div className = "App" >
    
    <Box   component="form"
      sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={login}
          onChange={(e)=>setLogin(e.target.value)}
          />
              
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          value={password}
          autoComplete="current-password"
          variant="standard"
          onChange={(e)=>setPassword(e.target.value)}
        />
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={handleLogin}>Already user</Button>
      <Button variant="contained">New user</Button>
      <Button variant="outlined" onClick={handleGoogle}>Sign with Google</Button>
    </Stack>


      </div>
    </Box>
    </div>
  );
}


export default App;