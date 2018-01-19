import React, { Component } from 'react';
import { render } from 'react-dom';
import StarRating from './components/StarRating';
import './components/star.css';

class App extends Component {
  render() {
    return <StarRating totalStars={7} starsSelected={3} />;
  }
}

render(<App />, document.getElementById('root'));
