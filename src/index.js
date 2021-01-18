import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-xficzv3o.us.auth0.com
// Cs1qh2TuN4O6Rsb0DabfkgLYT98x3Nmk
ReactDOM.render(
  <Auth0Provider
    domain='dev-xficzv3o.us.auth0.com'
    clientId='Cs1qh2TuN4O6Rsb0DabfkgLYT98x3Nmk'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
