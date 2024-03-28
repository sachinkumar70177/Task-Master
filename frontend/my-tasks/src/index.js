import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Theme from "./Styles/Theme";
import ContextProvider from "./Redux/Context";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider >
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={Theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
</ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
