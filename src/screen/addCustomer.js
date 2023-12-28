import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bgimg from '../image/img.png'
import { Input } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from '../config/reduces/userslice';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function AddCustomer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [model , setModel] = useState({})
  console.log(model)

  const saveData = () => {
    dispatch(postUser(model));
    navigate(`/ `)
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius:'10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
          }}
        >
      <Typography component="h1" variant="h5"     
      sx={{
        width:'100%',
          mb: 4,
          padding:'50px 25px 15px 25px',
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          textAlign:'center',
          color:'white',
          fontWeight:'900' 
        }}>
        Add New Customer
      </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 , width:'80%' }}>
            <TextField
              onChange={(e) => setModel({...model ,first_name:e.target.value})}
              color='success'
              margin="normal"
              required
              fullWidth
              id="name"
              label="Customer Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              onChange={(e) => setModel({...model ,email:e.target.value})}
              color='success'
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              id="email"
              autoComplete="current-password"
            />
            <Input type='file' onChange={(e) => setModel({...model ,avatar:e.target.files})}/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={saveData}
              sx={{ mt: 3, mb: 2 , background: 'linear-gradient(to right, #57BC90, #004B40)', }}
            >
              ADD CUSTOMER
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}