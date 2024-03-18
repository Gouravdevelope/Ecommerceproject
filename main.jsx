import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Mensclothing from './Mensclothing.jsx'
import Womenclothing from './Womenclothing.jsx'
import Products from './Products.jsx'
import Electronic from './Electronic.jsx'
import Cart from './Cart.jsx'
import store from './store.js'
import { Auth0Provider } from '@auth0/auth0-react'

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Products/>}/>
<Route path='men' element={<Mensclothing/>}/>
<Route path='women' element={<Womenclothing/>}/>
<Route path='/electronic' element={<Electronic/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-u1hxur2zcymwacjt.us.auth0.com"
  clientId="83LiMlN5gW4PBrFCdbTkzDAxOYPYkqRw"
  authorizationParams={{ redirect_uri :window.location.origin}}
 >
<Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </Auth0Provider>
 
    
  
)
