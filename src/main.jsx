import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// App routes
import Routes from './navigation/Routes';

// App fonts
import './assets/fonts/TT_Fors_Trial_Bold.ttf';
import './assets/fonts/TT_Fors_Trial_Medium.ttf';
import './assets/fonts/TT_Fors_Trial_Regular.ttf';
import './assets/fonts/TT_Fors_Trial_Light.ttf';

// Base styles
import './styles/reset.scss';
import './styles/variables.scss';
import './styles/globals.scss';

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
