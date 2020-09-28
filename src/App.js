import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import HomePage from './views/HomePage';
import { fetchMainData } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const editorChoice = useSelector((state) => state.mainReducer.editorChoice)
  const latestArticles = useSelector((state) => state.mainReducer.latestArticles)
  const latestReview = useSelector((state) => state.mainReducer.latestReview)

  useEffect(() => {
    // console.log(editorChoice)
    if(editorChoice.length === 0 || latestArticles.length === 0 || latestReview.length === 0){
      // console.log('11111111111111')
      dispatch(fetchMainData())
    }
  }, [editorChoice, latestReview, latestArticles, dispatch]);

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
