import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";

import router from './Router'
import ContextState from './Context/ContextState.jsx'

// fortunate khumalo import from MDB install for Promo Project //

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ContextState>
    <RouterProvider router={router} />
  </ContextState>

</React.StrictMode>,
)
