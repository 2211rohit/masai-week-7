import React from 'react';

export default class Header extends React.Component {
    render(){
      return (

        <div className="bg-light row fixed-top border-bottom">
      
          <div className="col-md-3">
          </div>
          
          <img src="https://zerodha.com/static/images/logo.svg" height="20px"  className="d-inline-block align-top mt-3" alt="Zerodha" />
          
          <div className="col-md-3">
          </div>

          <nav class="navbar navbar-expand-lg">
            <a className="navbar-brand">About</a>
            <a className="navbar-brand">Products</a>
            <a className="navbar-brand">Pricing</a>
            <a className="navbar-brand">Support</a>
            <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                Sign Up
            </button>
          </nav>
      </div>  
    )
  }
}
