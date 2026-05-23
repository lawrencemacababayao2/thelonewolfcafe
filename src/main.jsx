import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

//pages/components
import App from './App.jsx'
import Index from './pages/Index.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contactus", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);