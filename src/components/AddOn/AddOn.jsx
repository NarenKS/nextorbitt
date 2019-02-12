import React, { Component } from 'react';


class AddOn extends Component {
  render() {
    return (
      <div>
     
        <div className="grid">
            <div className="row">
                
                <div className="col-md-8" style={{width: "63%"}}>
                 VISHNU - NextOrbit 
                </div>
                <div className="col-md-4" className="fontname">
                    From
                    <input type="date" />
                    To
                    <input type="date" />

                </div>
            </div>
  

            <div className="row">
                
                <div className="col-md-4" style={{width: "32%",padding:"10px",boxShadow: "1px 2px 13px 2px #888888",margin:"10px",borderRadius:"5px"}}>
                $ 207,720 <br/> Sales $
                </div>
                  <div className="col-md-4" style={{width: "32%",boxShadow: "1px 2px 13px 2px #888888",margin:"10px",borderRadius:"5px"}}>
                  $ 13 <br/> Average Basket Size $

                </div>

                <div className="col-md-4"style={{width: "32%",boxShadow: "1px 2px 13px 2px #888888",margin:"10px",borderRadius:"5px"}} >
                $ 29,674 <br/> Average Revenue / Day $

                </div>

                <div className="col-md-4"style={{width: "32%",boxShadow: "1px 2px 13px 2px #888888",margin:"10px",borderRadius:"5px"}} >
                $ 207,720 <br/> Sales $

                </div>
                

            </div>

            <div className="row">

            <div className="col-md-4" style={{width: "32%",padding:"10px",boxShadow: "1px 2px 13px 2px #888888",margin:"10px",borderRadius:"5px"}}>
            15,071 <br/> Total Checkouts 
                </div>
                  <div className="col-md-4" style={{width: "32%",boxShadow: "1px 2px 13px 2px #888888",margin:"10px",borderRadius:"5px"}}>
                  91,581 <br/> Total Units Sold

                </div>

                <div className="col-md-4"style={{width: "32%",boxShadow: "1px 2px 13px 2px #888888",margin:"10px",borderRadius:"5px"}} >
                13,083 <br/> Average Units Sold / Day

                </div>

                <div className="col-md-4"style={{width: "32%",boxShadow: "1px 2px 13px 2px #888888",margin:"10px",borderRadius:"5px"}} >
                $ 207,720 <br/> Sales $

                </div>
            
            </div>
          </div>  
      </div>       
      
    );
  }
}

export default AddOn;
