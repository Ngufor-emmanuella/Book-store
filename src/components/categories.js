import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecker } from '../redux/Categories/categories';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handClick = () => {
    dispatch(statusChecker());
  };

  return (
    <>
      <button className="loading" type="submit" name="button" onClick={handClick}>Check Status</button>
      <p>{status}</p>
    </>
  );
}

export default Categories;
