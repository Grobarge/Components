import React from 'react';
import './RestaurantTool.css';
import logo from '../../assets/RestaurantTool/costavida.png';
import menu from '../../assets/RestaurantTool/menu.png';
import user from '../../assets/RestaurantTool/user.png';
import list from '../../assets/RestaurantTool/list.png';

function RestaurantTool() {
  return (
    <div className="RestaurantToolContainer">
      <div className='logo-container'>
        <img className='restaurant-image' src={logo}></img>
        <h2>Costa Vida</h2>
      </div>
      <div className='button-group'>
        <button><img className='button-image' src={list}></img>Account Settings</button>
        <button><img className='button-image' src={menu}></img>Menu</button>
        <button><img className='button-image' src={user}></img>Users</button>
      </div>

      <div className='status'>
        <h3>Status</h3>
        <p>Live</p>
      </div>
    </div>
  );
}

export default RestaurantTool;
