import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import icon from '../image/icon.png'
import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delUser, postUser } from '../config/reduces/userslice';
import { useNavigate, useParams } from 'react-router-dom';
const defaultTheme = createTheme();

export default function DelCustomer() {
    const selector = useSelector((state) => state.user)
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const delData = () => {
      dispatch(delUser(params.id))
      navigate(`/`)
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
            p:2
          }}
        >
          <Typography sx={{ mt: 6 , mb: 2}}>
            <img src={icon} style={{ width: '50px', height: '50px' }} />
          </Typography>
          <Typography component="h1" variant="h5" sx={{mb:2}}>
          Are you sure?
          </Typography>
          <Typography  style={{textAlign:'center' , fontWeight:'600' , marginBottom:'20px'}}>
          Do you really want to delete this customer? This process can not be undone.
          </Typography>
          <Box sx={{
            display:'flex',
          }}>
          <Button onClick={delData} style={{backgroundColor:'#A5A5AF' , color:'white', margin : '15px'}}>Cancel</Button>
          <Button onClick={() => navigate(`/`)} style={{backgroundColor:'#D80000' , color:'white', margin : '15px'}}>Delete</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
