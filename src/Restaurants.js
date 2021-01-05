import React, { Component, PropTypes, useReducer } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';
import {database} from './firebase';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }



  handleIncreament= (id)=>{
    const {user}= this.props;
    const {uid,displayName}=user;
    database.ref(`/restaurants/${id}/votes/${uid}`)
            .set({
              name:displayName
            });
  }
    handleDecrement= (id)=>{
    const {user}= this.props;
    const {uid}=user;
     database.ref(`/restaurants/${id}/votes/${uid}`)
            .remove();
  }

  render () {
    const {restaurants,user} = this.props;
    return (
      <section className="Restaurants">
        {
          map(restaurants,(restaurant,key)=>{
           return (
           <Restaurant key={key}
                       {...restaurant}
                        user={user}
                        handleVoteIncrease={()=>this.handleIncreament(key)}
                        handleVoteDecrease={()=>this.handleDecrement(key)}
            />);
          })
        }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
