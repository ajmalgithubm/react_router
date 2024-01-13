import Home from './components/Home';
import About from './components/About';
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


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route path='/place-order' element={<OrderSummery/>} />
        <Route path='/products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}>
            <Route path='trending' element={<Trending/>}/>
            <Route path='low-price' element={<Lowprice/>} />
            <Route path='high-price' element={<HighPrice/>} />
          </Route>
          <Route path='new' element={<New/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
