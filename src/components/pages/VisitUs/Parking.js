import React, { Component } from 'react';

class Parking extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Parking</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Visit Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                    <div className="content">
                      <div className="node node-page clearfix">
                        <div className="content">
                        <h2 className="header-lightBlue">Sunday Parking</h2>
                          <p>We have a small amount of onsite parking available, and the Red Cross have given permission for us to use their small carpark directly across the road from church.</p>
                          <p>If these are full, the Hobart Central Carpark is 200m further along Melville St, across the Elizabeth Street
                          intersection, with three hours of free parking on Sunday.</p>
                          <p><strong><em>Please be careful parking on the street, meters operate on Sunday.</em></strong></p>
                        </div>



                  </div>
                </div>  </div>



                        </div>




                      </div>
                    </div>
                  </div>
      </section>
    );
  }
}

export default Parking;
