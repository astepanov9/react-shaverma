import { Route, Routes } from 'react-router-dom';

import './scss/style.scss';
import Header from './components/Header';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Cart from './page/Cart';
import FullShaverma from './page/FullShaverma';

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/products/:id" element={<FullShaverma />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
