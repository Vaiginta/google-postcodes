import axios from 'axios';

import {
  FETCH_DATA,
  SET_INPUT
 } from '../action_types.js';

 export const fetchData = (searchValue) => dispatch => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+searchValue+'&key=AIzaSyDVkSV1doYJomqi7AF3yqlcFSS8LfnZGg8')
      .then((response) => {
        dispatch({
          type: FETCH_DATA,
          items:response.data.results
        });
      }).catch(err => {
        console.log(err);
        return dispatch({
          type:SET_INPUT,
          path:'error',
          value:'incorrect input'
        })
      });
 }
