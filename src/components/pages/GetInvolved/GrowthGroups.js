import React, { Component } from 'react';

import BibleStudy from "../../../assets/GrowthGroups.jpg";

class GrowthGroup extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Growth Groups</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Get Involved</span>
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
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="text-center">
                                <img className="img-responsive img-full-width" style={{ paddingRight: "50px", maxWidth: "500px" }} src={BibleStudy} width="585" height="309" alt="" />
                              </div>
                              <br /><br />
                              <p className="ministry-text">
                                <strong>Psalm 119:11:<br />
                                  <em>"I have hidden your word in my heart that I might not sin against you.”</em></ strong>
                              </p>
                              <p className="ministry-text">
                                We hold a number of growth groups throughout the week. Please see <a href="/events">our calendar</a> for details of group meeting dates and times. If you would like additional information on growth groups in your area, please email your details to <a href="mailto:groups@cornerstonehobart.com">groups@cornerstonehobart.com</a> and a Growth Group Leader will contact you.
                              </p>
                              <br />
                              <br />
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

export default GrowthGroup;
