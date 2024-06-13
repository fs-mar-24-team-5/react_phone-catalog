import { AppRouter } from './router';
import { useEffect } from 'react';

import './App.scss';
import { fetchProducts } from './redux';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux';

export const App = () => {
  const dispatch = useAppDispatch();

  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(fetchProducts());
    // dummy request for testing purposes, to be removed
    fetch('api/mock')
      .then(response => response.json())
      .then(data => console.log(data));
  }, [dispatch]);

  return (
    <div className="App" data-theme={theme}>
      <AppRouter />
    </div>
  );
};
