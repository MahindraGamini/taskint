import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../features/chatSlice';
import { Box, Button, TextField } from '@mui/material';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim() !== '') {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        gap: 2,
        backgroundColor: '#f5f5f5', // Light background to differentiate input area
        borderTop: '1px solid #ddd', // Separator line at the top
        boxShadow: '0px -1px 5px rgba(0, 0, 0, 0.1)', // Subtle top shadow
      }}
    >
      <TextField
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        sx={{
          backgroundColor: '#fff', // White background for the input
          borderRadius: '20px', // Rounded corners
          boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for the input field
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ccc', // Softer border color
            },
            '&:hover fieldset': {
              borderColor: '#999', // Darker border on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3f51b5', // Color change on focus
            },
          },
          '& input::placeholder': {
            color: '#888', // Custom placeholder color
            opacity: 1, // Full opacity for better readability
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        sx={{
          padding: '10px 20px',
          borderRadius: '20px',
          textTransform: 'none', // No uppercase text
          boxShadow: '0px 2px 8px rgba(63, 81, 181, 0.2)', // Subtle button shadow
          '&:hover': {
            backgroundColor: '#303f9f', // Darker blue on hover
            boxShadow: '0px 4px 12px rgba(63, 81, 181, 0.4)', // Bigger shadow on hover
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
