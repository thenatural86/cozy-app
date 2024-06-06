import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// treyknoxx@gmail.com
// +Cux%7$!VL%N++?

// Domain
// dev-itfjckjv62h81dxu.us.auth0.com

// Client Id
// BJWflfLTJZ7eO93Jwkt8g8L67SJBbxvF

// old
// dev-xficzv3o.us.auth0.com
// Cs1qh2TuN4O6Rsb0DabfkgLYT98x3Nmk

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain='dev-itfjckjv62h81dxu.us.auth0.com'
    clientId='BJWflfLTJZ7eO93Jwkt8g8L67SJBbxvF'
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
