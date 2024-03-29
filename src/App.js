import Home from './components/Home';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderSummery from './components/OrderSummery';
import NotFound from './components/NotFound';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import New from './components/New';
import Trending from './components/Trending';
import Lowprice from './components/Lowprice';
import HighPrice from './components/HighPrice';
import Users from './components/Users';
import UsersDetails from './components/UsersDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/Auth';
import Login from './components/Login';
import RequiredAuth from './components/RequiredAuth';
let LazyAbout = lazy(() => import('./components/About'));


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={
            <React.Suspense fallback="loading..">
              <LazyAbout/>
            </React.Suspense>} />
          <Route path='/place-order' element={<OrderSummery />} />
          <Route path='/products' element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />}>
              <Route path='trending' element={<Trending />} />
              <Route path='low-price' element={<Lowprice />} />
              <Route path='high-price' element={<HighPrice />} />
            </Route>
            <Route path='new' element={<New />} />
          </Route>
          <Route path='/users' element={<Users />} />
          <Route path='/users/:userId' element={<UsersDetails />} />
          <Route path='users/admin' element={<Admin />} />
          <Route path='/profile' element={<RequiredAuth>
            <Profile />
          </RequiredAuth>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
