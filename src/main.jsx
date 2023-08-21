import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";

import router from './Router'
import ContextState from './Context/ContextState.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextState>
      <RouterProvider router={router} />
    </ContextState>

  </React.StrictMode>
)
