import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import HomePage from './views/HomePage';
import { fetchMainData } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const editorChoice = useSelector((state) => state.mainReducer.editorChoice)
  const latestArticle = useSelector((state) => state.mainReducer.latestArticle)
  const latestReview = useSelector((state) => state.mainReducer.latestReview)

  useEffect(() => {
    // console.log(editorChoice)
    if(editorChoice.length === 0 || latestArticle.length === 0 || latestReview.length === 0){
      // console.log('11111111111111')
      dispatch(fetchMainData())
    }
  }, [editorChoice, latestReview, latestArticle, dispatch]);

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
