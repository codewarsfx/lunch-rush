import React, { Component, PropTypes } from 'react';
import './NewRestaurant.css';
import {database} from './firebase';

class NewRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.restaurantRef= database.ref('/restaurants');

  }

  handleSubmit(event) {
    event.preventDefault();
    this.restaurantRef.push({
      name:this.state.name
    });
    
  }

  render() {
    const { name } = this.state;

    return (
      <form
        className="NewRestaurant"
      >
        <input
          type="text"
          value={ name }
          placeholder="Name of Fine Establishment"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: PropTypes.object
};

export default NewRestaurant;
