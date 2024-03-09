import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "leaflet/dist/leaflet.css"; 
import { createTheme, MantineProvider } from '@mantine/core';
// core styles are required for all packages
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
      <App />
    </MantineProvider>
)
