import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, Typography } from '@mui/material';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const bottomRef = useRef(null);  

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto', // Enable scrolling
        p: 2,
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <List dense={false} sx={{ maxHeight: '100%' }}>
        {messages.map((message) => (
          <ListItem
            key={message.id}
            alignItems="flex-start"
            sx={{
              mb: 2,
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
              padding: '10px',
            }}
          >
            {message.user && (
              <ListItemAvatar>
                <Avatar
                  sx={{ bgcolor: '#3f51b5', color: '#fff' }} 
                  alt={message.user}
                >
                  {message.user.charAt(0)} 
                </Avatar>
              </ListItemAvatar>
            )}
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {message.user}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#888', fontSize: '0.75rem' }}>
                    {message.timestamp}
                  </Typography>
                </Box>
              }
              secondary={
                <Typography variant="body2" sx={{ mt: 0.5, fontSize: '0.85rem', color: '#333' }}>
                  {message.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
   
      <div ref={bottomRef} />
    </Box>
  );
};

export default ChatWindow;
