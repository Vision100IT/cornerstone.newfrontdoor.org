import React, { Component } from 'react';

//import ParkingMap from '../../../assets/ParkingMap.jpg';
import onSiteParking from '../../../assets/onSiteParking.jpg';
import utasParking from '../../../assets/utasParking.jpg';
import redCrossParking from '../../../assets/redCrossParking.jpg';

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
                              <div className="col-xs-3">
                                <img src={onSiteParking} style={{ paddingTop: "20px" }} alt=""></img>
                              </div>
                              <div className="col-xs-8">
                                <h3 className="header-lightBlue no-bottom-margin">On-Site Parking:</h3>
                                <p>As we only have a small amount of on-site parking available, we ask that this be reserved for:</p>
                                <ul>
                                  <li>Families with babies and toddlers.</li>
                                  <li>The elderly.</li>
                                  <li>Those with reduced mobility.</li>
                                </ul>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xs-3">
                                <img src={redCrossParking} style={{ paddingTop: "20px" }} alt=""></img>
                              </div>
                              <div className="col-xs-8">
                                <h3 className="header-lightBlue no-bottom-margin">Red Cross Car Park:</h3>
                                <p>
                                  The Red Cross have given permission for us to use their small carpark directly across the road from church.
                            </p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xs-3">
                                <img src={utasParking} style={{ paddingTop: "20px" }} alt=""></img>
                              </div>
                              <div className="col-xs-8">
                                <h3 className="header-lightBlue no-bottom-margin">UTAS Building:</h3>
                                <p>
                                  Car parking is also available in the UTAS building. Proceed through the entry and up the ramp to the voucher parking area. Parking is free on Sundays.
                                </p>
                              </div>
                            </div>


                            <h3 className="header-lightBlue no-bottom-margin">Parking Meters:</h3>
                            <p>
                              1hr and 2hr Parking Meters are available in Melville St. Parking Attendants patrol the area regularly and the Hobart City Council strictly enforces the time limits. The fine for exceeding the time limit is approximately $40, even if you have revisited the meter and paid for additional time.
                            </p>
                            <br />
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
      </section>
    );
  }
}

export default Parking;
