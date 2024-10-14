import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Container, CssBaseline } from '@mui/material';
import { receiveMessage } from './features/chatSlice';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
   
    const timer = setTimeout(() => {
      dispatch(receiveMessage('Hello...'));
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-between',
        }}
      >
        <ChatWindow />
        <MessageInput />
      </Box>
    </Container>
  );
}

export default App;
