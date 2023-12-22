import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ChatProvider from './Context/ChatProvider';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChatProvider>
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </ChatProvider>
);

