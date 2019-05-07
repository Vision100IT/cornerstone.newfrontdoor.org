/* eslint-disable */
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
                            <div className=" col-md-6 col-xs-12">
                              <img className="img-responsive img-full-width" style={{ paddingRight: "50px" }} src={BibleStudy} width="585" height="309" /><br /><br />
                              <p>
                                <strong>Matthew 18:20:<br />
                                  <em>"For where two or three come together in my name, there I am with them.."</em></ strong>
                              </p>
                              <p>
                                If you would like additional information on one of our Growth Groups, please email your details to <a href="mailto:admin@cornerstonehobart.com">admin@cornerstonehobart.com</a> and a Growth Group Leader will contact you.
                              </p>
                              <br />
                              <br />
                            </div>
                            <div className=" col-md-6 col-xs-12">
                              <strong>Sunday:</strong><br /><br />
                              <ul>
                                <li><strong>Young Women’s Group</strong> straight after church</li><br />
                              </ul>
                              <strong>Monday:</strong><br /><br />
                              <ul>
                                <li>Ladies Group in Kingston Area at 10:00am to Midday</li><br />
                              </ul>
                              <strong>Tuesday:</strong><br /><br />
                              <ul>
                                <li><a href="/SystematicTheologyCourse">Systematic Theology Course</a></li><br />
                              </ul>
                              <strong>Wednesday:</strong><br /><br />
                              <ul>
                                <li><strong>Ladies Group</strong> in Howrah at 10:00am to Midday</li><br />
                                <li><strong>Kingston</strong> at 7:30pm (two groups to choose from)</li><br />
                              </ul>
                              <strong>Thursday:</strong><br /><br />
                              <ul>
                                <li><strong>Mums with Young Children</strong> in Howrah at 10:00am to Midday</li><br />
                                <li><strong>Ladies Group</strong> in West Hobart at 2:00pm to 3:30pm</li><br />
                                <li><strong>West Hobart</strong> at 7:30pm</li><br />
                                <li><strong>Lindisfarne</strong> at 7:30pm</li><br />
                              </ul><br />


                              <strong>Youth Group</strong><br /><br />
                              <a href="/QuarryYouth">Quarry Youth</a> is our youth group that is for students in Years 6-12 that meets at Hope Christian Centre 45 Tasma St. Hobart on Fridays at 7pm to 9pm. <br />
                              You can find more information about this group <a href="/QuarryYouth">here.</a><br /><br />

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
