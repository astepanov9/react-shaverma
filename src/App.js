import React from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/style.scss";
import Header from "./components/Header";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import Cart from "./page/Cart";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
