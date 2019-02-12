import React, { Component } from 'react';
import SideBar  from "./sideBar/SideBar";
import Header from "./header/Header";
import AddOn from "./AddOn/AddOn";
import Batch from "./batch/Batch";
import Graph from './graph/Graph';
import "../App.css";

class Layout extends Component {
  render() {
    return (
     
        <div className="grid">
            <div className="row">
                <div className="col-md-2 col-lg-2 sideBarContainer">
                <SideBar />
                </div>
                <div className="col-md-10 col-md-10 mainContainer">
                    <Header />
                    <AddOn />
                    <Batch />
                    <Graph />
                </div>
            </div>
        </div>
    );
  }
}

export default Layout;
