import React, { Component } from 'react';

import EntranceImg from '../../../assets/Entrance.jpg';

class WorshipServices extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Worship Services</h1>
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
                          <div className="col-md-8 col-xs-12">
                            <h4 className="header-lightBlue no-bottom-margin no-top-margin">Sunday Mornings</h4>
                            <h4 className="header-lightBlue no-bottom-margin no-top-margin">10am-11:30am</h4>
                            <h4 className="header-lightBlue no-bottom-margin no-top-margin">Alphacrucis College, 45 Melville St, Hobart</h4>


                            <p>
                              Proceed through the main gate, the door is at the back of the carpark.
                            </p>

                            <p>
                              Our auditorium is upstairs. Please let one of our welcome team know if you would like assistance with the stairs, or if you would like to use our chairlift.
                            </p>

                            <p>
                              Children are welcome to remain in church for the duration of the church service.<br />
                              During school term we also offer:
                            </p>
                            <ul>
                              <li>Creche for babies and toddlers.</li>
                              <li>Corner Pebble (our Sunday School) for children aged 5 to 11.</li>
                            </ul>

                            <p>
                              Please join us after the service for fellowship over a cup of tea or coffee.
                            </p>
                            <br />
                          </div>
                          <div className="col-md-4 col-xs-12">
                            <img className="img-responsive img-full-width" src={EntranceImg} alt="Cornerstone Entrance" />

                            <a href="https://goo.gl/maps/NsYQcj7oGi52" target="_blank" rel="noopener noreferrer">
                              <div className="col-xs-12 text-center directions-div">Get Directions</div>
                            </a>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>








            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WorshipServices;
