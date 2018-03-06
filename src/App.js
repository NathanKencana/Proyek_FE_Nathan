import React, { Component } from 'react';
import {Link, Route, Router} from 'react-router-dom';
import Produk1 from './components/Produk1';
import Produk2 from './components/Produk2';
import Produk3 from './components/Produk3';
import About from './components/About';
import Contact from './components/Contact';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <div classNameName="container-fluid">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
              <Link to="/Default" className="navbar-brand">Toko apalah</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li classNameName="active"><Link to="/Default">Home</Link></li>
                <li classNameName="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Produk
                  <span className="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><Link to="/produk1">Produk 1</Link></li>
                    <li><Link to="/produk2">Produk 2</Link></li>
                    <li><Link to="/produk3">Produk 3</Link></li>                    
                  </ul>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
              <form className="navbar-form navbar-left" action="">
                <div className="input-group">
                  <input type="text" class="form-control" placeholder="Search"/>
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="glyphicon glyphicon-search"/>
                    </button>
                  </div>
                </div>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up </a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login </a></li>
              </ul>
            </div>
          </div>
        </nav>

        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/default" component={Default}/>

        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Toko apalah</h1>
            <ul className="list-group">
              <li><Link to="/produk1">Produk 1</Link></li>
              <li><Link to="/produk2">Produk 2</Link></li>
              <li><Link to="/produk3">Produk 3</Link></li>
            </ul>
          </div>
          <div className="col-lg-9">
            <Route path="/produk1" component={Produk1}/>
            <Route path="/produk2" component={Produk2}/>
            <Route path="/produk3" component={Produk3}/>            
          </div>
        </div>

        
        

      </div>
    );
  }
}

export default App;
