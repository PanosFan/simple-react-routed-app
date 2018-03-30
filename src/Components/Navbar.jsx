import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import './Navbar.css';

class Navbar extends Component {
	render () {
		return (
			<div className="Navbar">

                     <nav>
                        <div className="menu-icon">
                              <i className="fa fa-bars fa-2x"></i>
                        </div>

                        <div className="logo">
                              Brand-Name
                        </div>

                        <div className="menu">
                              <ul>
                                    <li><NavLink exact activeClassName="active-link" to="/">Home</NavLink></li>                                    
                                    <li><NavLink exact activeClassName="active-link" to="/about">About</NavLink></li>
                              </ul>
                        </div> 

                      </nav>                 
			</div>
		);
	}
}



$(function(){
      $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass('showing');
      });

      $(window).on("scroll", function() {
                  if($(window).scrollTop()) {
                        $('nav').addClass('black');
                  }

                  else {
                        $('nav').removeClass('black');
                  }
      });

      $("li a").click(function(){
            $("nav ul").removeClass('showing');
      });

});

            


            

export default Navbar;