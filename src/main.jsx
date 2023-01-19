import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router5'
import loggerPlugin from 'router5-plugin-logger'
import browserPlugin from 'router5-plugin-browser'
import createRouter from 'router5'
import Routes from './routes/Routes'
import App from './App'
import './index.css'

const router = createRouter(Routes,{defaultRoute:'home'});
router.usePlugin(browserPlugin());
router.usePlugin(loggerPlugin);
router.start();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
