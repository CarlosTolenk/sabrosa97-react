import React, { Component } from 'react';


class Menu extends Component {
  render() {
    return (
        <div id="top1">
            <div className="top2_wrapper" id="top2">
                <div className="container">
                    <div className="top2 clearfix">
                        <header>
                            <div className="logo_wrapper">
                                <a href="#home" className="logo scroll-to">                                 
                                    <img src="./images/sabrosa-logo.png" alt="sabrosa-logo" className="logo-sabrosa" />
                                </a>
                            </div>
                        </header>
                        <div className="menu_wrapper">                 
                            <div className="navbar navbar_ navbar-default">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="navbar-collapse navbar-collapse_ collapse">
                                    <ul className="nav navbar-nav sf-menu clearfix">
                                        <li><a href="#home">Inicio</a></li>                     
                                        
                                        <li><a href="#featured">Videos</a></li>
                                                      
                                        <li><a href="#sobre_nosotros">Sobre Nosotros</a></li>                             
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>      
    );
  }
}

export default Menu;
