import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser:null,
      restaurants:null,
    };
    this.restaurantRef =database.ref('/restaurants');
  }

  componentDidMount(){
    auth.onAuthStateChanged((user)=>{
      
      this.setState({
        currentUser:user
      });

      this.restaurantRef.on('value',(snapshot)=>{
        this.setState({
            restaurants:snapshot.val()
        });

      });
    });

  }

  render() {
    const {currentUser,restaurants} =this.state;

    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
         { currentUser ? (
           <div>
          <NewRestaurant/>
          {restaurants && <Restaurants restaurants={restaurants} user={currentUser}/>}
         <CurrentUser user= {currentUser}/> 
            </div> ): <SignIn/>}
      </div>
    );
  }
}

export default Application;
