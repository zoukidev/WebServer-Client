import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router";
import { router } from './routes.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)