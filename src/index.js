import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './Root'
import About from './About';
import PokemonDetail from './Routes/PokemonDetail';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import Pokedex from './Routes/Pokedex';

const router = createHashRouter([
  {
    path:"/",
    element:<Root/>,

    children:[
   {
      path:"/",
      element:<App />,
    },
    {
        path:"/about",
        element:<About />
    },
    {
      path:"/pokedex",
      element:<Pokedex/>
    },
    {
      path:"/pokemon/:pokemonId",
      element:<PokemonDetail />
    },
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<RouterProvider router={router}/>}
 </React.StrictMode>
);