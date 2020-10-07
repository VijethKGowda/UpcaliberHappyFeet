import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import { Dashboard } from './pages/Dashboard'
import Cart from './pages/Cart'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/cart" component={Cart} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
)

export default Routes
