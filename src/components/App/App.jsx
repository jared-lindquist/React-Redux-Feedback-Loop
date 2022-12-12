import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

//TODO import components when ready

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    getFeedback();
  }, []);

  // TODO: write getFeedback axios.get route is '/api/feedback'
  const getFeedback = () => {
    axios.get('/api/feedback')
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: 'ADMIN',
        payload: response.data
      })
    })
    .catch((error) => {
      console.log('error in GET', error);
    })
  }

  //TODO: add <Router><Route> for all components 
  //do I even need a get for this project? I don't think so
  return (
    <div className='App'>
      <Header />
        <Router>
          <Route exact path='/'>
            <Feeling />
          </Route>
          <Route exact path='/understanding'>
            <Understanding />
          </Route>
          <Route exact path='/supported'>
            <Supported />
          </Route>
          <Route exact path='/comments'>
            <Comments />
          </Route>
          <Route exact path='/review'>
            <Review />
          </Route>
          <Route exact path='/thankyou'>
            <ThankYou />
          </Route>
          <Route exact path='/admin'>
            <Admin getFeedback={getFeedback} />
          </Route>
        </Router>
    </div>
  );
}

export default App;
