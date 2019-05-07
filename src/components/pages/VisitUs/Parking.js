import React, { Component } from 'react';
import StreetView from '../../models/StreetView';

//import ParkingMap from '../../../assets/ParkingMap.jpg';
//import onSiteParking from '../../../assets/onSiteParking.jpg';
//import utasParking from '../../../assets/utasParking.jpg';

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
                        <div className="row">
                          <div className="col-md-12 col-xs-12">
                            <div className="row">
                              <div className="col-xs-12">
                                <h3 className="header-lightBlue no-bottom-margin">On-Site Parking:</h3>
                                <p>There are a limited number of on-site parking spaces available inside the gates. We ask that these be reserved for:</p>
                                <ul>
                                  <li>Families with babies and toddlers.</li>
                                  <li>The elderly.</li>
                                  <li>Those with reduced mobility.</li>
                                </ul>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xs-12">
                                <h3 className="header-lightBlue no-bottom-margin">Street Parking:</h3>
                                <p>
                                  There are unmetered parking spaces available in Federal Street.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-xs-12 text-center">
                              <StreetView />
                            </div>
                          </div>


                          {/*<div className="col-md-4 col-xs-12">
                            <a href={ParkingMap} target="_blank" rel="noopener noreferrer"><img className="img-responsive img-full-width" src={ParkingMap} alt="Parking locations map" /> </a>
                           </div>*/}
                        </div>
                      </div>

                    </div>
                  </div>  </div>



              </div>




            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Parking;
