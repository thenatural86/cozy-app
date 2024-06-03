import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// new
// domain
// dev-chbb8zft.us.auth0.com
// client id
// 9ER26rxIeN4wLutIUMJyiawCZt6hI5df

// old
// dev-xficzv3o.us.auth0.com
// Cs1qh2TuN4O6Rsb0DabfkgLYT98x3Nmk

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
)
