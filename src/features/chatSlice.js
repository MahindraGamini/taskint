import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],  
  currentUser: 'John Doe',  
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const newMessage = {
        id: state.messages.length + 1,
        text: action.payload,
        user: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
      };
      state.messages.push(newMessage);
    },
    receiveMessage: (state, action) => {
      const newMessage = {
        id: state.messages.length + 1,
        text: action.payload,
        user: 'Bot',
        timestamp: new Date().toLocaleTimeString(),
      };
      state.messages.push(newMessage);
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
