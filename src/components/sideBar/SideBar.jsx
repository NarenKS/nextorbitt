import React, { Component } from 'react';
import * as logo from "../../img/a.jpg"
import * as analysis from "../../img/analysis.jpg"
import * as actions from "../../img/actions.png"
import * as settings from "../../img/settings.png"
import "./sidebar.css"
class SideBar extends Component {
    render() {
        return (

            <div className="grid">
                <div className="row">

                    <div className="sidenav">
                        <img className="imagecontainer" src={logo}></img>
                        <hr></hr>
                        <div className="side-heading">
                        <img className="analysis" src={analysis}></img>
                        <h5>  Analysis </h5>
                        </div>
                        
                        <ul>
                        <li><a href="#Sales Performance">Sales Performance</a></li>
                        <li><a href="#Comparison Tools">Comparison Tools</a></li>
                        <li><a href="#Top Sellers">Top Sellers</a></li>
                        <li><a href="Slow Movers">Slow Movers</a></li>
                        <li><a href="#Out of Stock Analysis">Out of Stock Analysis</a></li>
                        <li><a href="#Demad Planning">Demad Planning</a></li>
                        <li><a href="#Store Inwards">Store Inwards</a></li>
                        <li><a href="#Inventroy Level">Inventroy Level</a></li>
                        <li><a href="#Order History">Order History</a></li>
                        </ul>
                        <hr></hr>
                        {/* <ul> 
                            <li>Sales Performance</li> 
                            <li>Comparison Tools</li>
                            <li>Top Sellers</li>
                            <li>Slow Movers</li>
                            <li>Out of Stock Analysis</li>
                            <li>Demad Planning</li>
                            <li>Store Inwards</li>
                            <li>Inventroy Level</li>
                            <li>Order History</li>
                        </ul> */}
                        
                        <div className="side-headi">
                        <img className="actio" src={actions}></img>
                        <h5>  Actions </h5>
                        </div>
                        <ul>
                        <li><a href="#Store Ordering">Store Ordering</a></li>
                        <li><a href="#Alters and Resolution">Alters and Resolution</a></li>
                        </ul>
                        <hr></hr>
                        {/* <ul>
                            <li>Store Ordering</li>
                            <li>Alters and Resolution</li>
                        </ul> */}
                        
                        <div className="side-headiS">
                        <img className="actioS" src={settings}></img>
                        <h5>  Settings </h5>
                        </div>
                        <ul>
                        <li><a href="#My Stores">My Stores</a></li>
                        <li><a href="#My Products">My Products</a></li>
                        </ul>
                        <hr></hr>
                        {/* <ul>
                            <li>My Stores</li>
                            <li>My Products</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
