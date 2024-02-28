import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreens from '../src/screens/HomeScreens.jsx';
import Loginscreen from '../src/screens/Loginscreen.jsx';
import Registerscreen from '../src/screens/RegisterScreens.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreens />} />
      <Route path='/login' element={<Loginscreen />} />
      <Route path='/register' element={<Registerscreen />} />

    </Route>

  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);


