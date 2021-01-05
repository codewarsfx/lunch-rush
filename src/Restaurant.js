import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    
    const {name,handleVoteIncrease,user,handleVoteDecrease,votes} =this.props; 
    const handleDisplayButton = votes && Object.keys(votes).includes(user.uid);
    
    return (
      <article className="Restaurant">
        {
          map(votes,(vote,key)=><li key={key}>{vote.name}</li>)
        }
        
        <div>
        {!handleDisplayButton ?
        <button onClick={handleVoteIncrease}>Vote to go here</button>:
        <button className='destructive' onClick={handleVoteDecrease}>changed my mind</button>}
        </div>
  
        <h3>{name}</h3>
        
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleVoteIncrease: PropTypes.func,
  handleVoteDecrease: PropTypes.func
};

export default Restaurant;
