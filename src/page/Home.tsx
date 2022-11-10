import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import SortPopup from '../components/Sort';
import { sortList } from '../components/Sort';
import ShavermaBlock from '../components/ShavermaBlock';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slice/filterSlice';
import { fetchShavermas, selectedItem } from '../redux/slice/shavermaSlice';
import { useAppDispatch } from '../redux/store';

const sortListArr = [...sortList];

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchRef = React.useRef(false);
  const mountedRef = React.useRef(false);

  const { categoryId, sortList, currentPage, searchValue } = useSelector(
    (state: any) => state.filterSlice
  );
  const { items, status } = useSelector(selectedItem);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortListArr.find((obj) => obj.property === params.sortBy);

      if (sort) {
        params.sortBy = sort;
      }

      dispatch(
        // @ts-ignore
        setFilters(params)
      );

      searchRef.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!searchRef.current) {
      fetchShaverma();
    }
    searchRef.current = false;
  }, [categoryId, sortList.property, currentPage]);

  React.useEffect(() => {
    if (mountedRef.current) {
      const queryString = qs.stringify(
        {
          currentPage,
          categoryId,
          sortList: sortList.property,
        },
        { addQueryPrefix: true }
      );
      navigate(`${queryString}`);
    }
    mountedRef.current = true;
  }, [categoryId, sortList, currentPage]);

  const fetchShaverma = async () => {
    const order = sortList.property.includes('-') ? 'asc' : 'desc';
    const sortBy = sortList.property.replace('-', '');
    const category = categoryId > 0 ? `${categoryId}` : '';
    const page = `${currentPage}`;
    const limit = '8';

    dispatch(
      fetchShavermas({
        order,
        sortBy,
        category,
        page,
        limit,
      })
    );
  };

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const products = items
    .filter((obj: any) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj: any) => <ShavermaBlock key={obj.id} {...obj} />);

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const onClickCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <SortPopup />
      </div>
      <h2 className="content__title">Все шавермы</h2>
      <div className="content__items">{status === 'loading' ? skeletons : products}</div>
      <Pagination onChangePage={onChangePage} />
    </>
  );
};

export default Home;
