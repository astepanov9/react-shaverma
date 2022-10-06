import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ShavermaBlock from "../components/ShavermaBlock";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategoryId, setCurrentPage } from "../redux/slice/filterSlice";

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sortList, currentPage } = useSelector((state) => state.filterSlice);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    const order = sortList.property.includes("-") ? "asc" : "desc";
    const sortBy = sortList.property.replace("-", "");
    const category = categoryId > 0 ? `${categoryId}` : "";
    const page = `${currentPage}`;
    const limit = 8;

    setIsLoading(true);
    const url = `https://632864fba2e90dab7bdf12d2.mockapi.io/items?page=${page}&limit=${limit}&category=${category}&sortBy=${sortBy}&order=${order}`;
    axios.get(url).then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
  }, [categoryId, sortList.property, currentPage]);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const products = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <ShavermaBlock key={obj.id} {...obj} />);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => dispatch(setCategoryId(id))}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все шавермы</h2>
      <div className="content__items">{isLoading ? skeletons : products}</div>
      <Pagination onChangePage={onChangePage} />
    </>
  );
}

export default Home;
