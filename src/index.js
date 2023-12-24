import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Root from "./routes/root"
import ErrorPage from "./ErrorPage"
import About from './components/About';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [  {
        path: "contacts/:contactId",
        element: <Contact />
      }],
  },
  // {
  //   path: "contacts/:id",
  //   element: <Contact />,
  // },
  {
    path: "about",
    element: <About />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// element: <div style={{textAlign:'center',fontWeight:'bold'}} >Hello World</div>,
    // element: <App />,

