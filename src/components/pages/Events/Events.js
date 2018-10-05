import React, { Component } from 'react';

import WWAImg from '../../../assets/WWAImg.jpg'
import WWFImg from '../../../assets/WWFImg.jpg'
import overviewImg from '../../../assets/systematicTheologyOverview.jpg'
import entranceImg from '../../../assets/Entrance.jpg';

class Events extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Events</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Events</span>
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
                  <div id="block-system-main" className="block block-system">
                    <div className="content">
                      <div className="node node-page clearfix">
                        <div className="content">
                          <h4 className="header-lightBlue">Current Events</h4>
                          <div className="row">
                            <div className="col-md-2 col-xs-6 text-center">
                              <a href="/WorshipServices"><img src={entranceImg} width="150px" height="139px" alt=""></img></a><br />
                              <strong>Sunday Services</strong>
                            </div>
                            <div className="col-md-2 col-xs-6 text-center">
                              <a href="/SystematicTheologyOverview"><img src={overviewImg} alt=""></img></a><br />
                              <strong>Systematic Theology</strong>
                            </div>
                          </div>
                          <h4 className="header-lightBlue">Past Events</h4>
                          <div className="row">
                            <div className="col-md-2 col-xs-6 text-center">
                              <a href="https://www.facebook.com/WWATasmania/" target="_blank" rel="noreferrer noopener"><img src={WWAImg} width="150px" height="139px" alt=""></img></a><br />
                              <strong>Women’s Weekend Away</strong>
                            </div>

                            <div className="col-md-2 col-xs-6 text-center">
                              <a href="/event/WomensWinterFestival" ><img src={WWFImg} width="150px" height="139px" alt=""></img></a><br />
                              <strong>Women’s Winter Festival</strong>
                            </div>
                          </div>
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

export default Events;
