// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import homeImage from './images/homeImage.jpg'; // Ensure you have an image in the src/components directory

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  }

  const handleSignup = () => {
    navigate('/register');
  }

  return (
    <Container>
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        mt={4} 
        sx={{ height: '100vh', textAlign: 'center' }}
      >
        <Box
          className={animate ? 'bounce' : ''}
          alignItems="left"
          component="img"
          src={homeImage}
          alt="Welcome"
          sx={{ 
            width: '80%', 
            height: 'auto', 
            borderRadius: '10%', 
            marginRight: '10%',
            boxShadow: 30
          }}
        />
        <Box 
          className={animate ? 'bounce' : ''} 
          sx={{ 
            width: '45%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'right', 
            alignItems: 'right' 
          }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Master of Money
          </Typography>
          <Typography variant="h7" component="h7" gutterBottom>
            It's not about how much you make, it's about how much
          </Typography>
          <h3>            
            YOU NEED!
          </h3>
          <div className="mt-4">
            <button className="btn btn-primary mr-2" onClick={handleLogin} >Login</button>
            <button className="btn btn-secondary" onClick={handleSignup} >Signup</button>
          </div>        
          </Box>
      </Box>
    </Container>
  );
};

export default Home;
