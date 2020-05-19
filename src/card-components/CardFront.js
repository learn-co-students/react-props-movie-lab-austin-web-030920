import React, { Component } from 'react';

class CardFront extends Component {

  render() {
    return (
      <div 
        className="card-front" 
        style={{backgroundImage: `url(${this.props.poster})`}}
      ></div>
    )
  }
}

CardFront.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
}

export default CardFront