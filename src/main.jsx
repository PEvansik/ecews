import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProvider from './common/providers/AppProvider.jsx'

import RootRouter from './common/routers/RootRouter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
)
