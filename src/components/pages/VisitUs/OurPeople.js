import React, { Component } from 'react';


import Male from '../../../assets/people/Male.png';
import Female from '../../../assets/people/Female.png';

import Person from '../../models/Person';

class OurPeople extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Our People</h1>
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
                  <div id="block-system-main" className="block block-system">
                    <div className="content">
                      <div className="node node-page clearfix">
                        <div className="content">
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="header-lightBlue text-center">Elders</h2>
                              <p className="text-center"><strong>Contact:  <a href="mailto:elders@cornerstonehobart.com" >elders@cornerstonehobart.com</a></strong></p><br />

                              <Person name="Campbell Markham" title="Pastor" image={Male} />
                              <Person name="Des Richardson" title="Session Clerk" image={Male} />
                              <Person name="Rafael Muggeridge" title="Elder" image={Male} />
                              <Person name="Simon Boonstra" title="Elder" image={Male} />
                              <Person name="Derrick Clack" title="Elder" image={Male} />
                              <Person name="Nathaniel Richardson" title="Elder" image={Male} />
                              <Person name="James Baker" title="Elder" image={Male} />


                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">

                              <h2 className="header-lightBlue text-center">Deacons</h2>

                              <Person name="Trish Smith" title="Deacon" image={Female} />
                              <Person name="David Van Emerick" title="Deacon" image={Male} />
                              <Person name="Jane Maarseven" title="Deacon" image={Female} />


                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <h2 className="header-lightBlue text-center">Board of Management</h2>
                                <p className="text-center"><strong>Contact:  <a href="mailto:bom@cornerstonehobart.com" >bom@cornerstonehobart.com</a></strong></p>

                                <p className="text-center"><strong>Cornerstone Elders are ex officio members of the Board of Management</strong></p>

                                <Person name="David Van Emerick" title="Secretary" image={Male} />
                                <Person name="Libby Dilger" title="Treasurer" image={Female} />
                                <Person name="Heinz Maarseveen" title="" image={Male} />
                                <Person name="Jane Maarseveen" title="" image={Female} />
                                <div className="clearfix"></div>
                                <Person name="Trish Smith" title="" image={Female} />
                                <Person name="Amy Glynn" title="" image={Female} />

                              </div>
                            </div>
                            <br /><br />


                            <div className="row">
                              <div className="col-md-6">
                                <h4><strong>Joe Cox</strong>, Trainee to the Pastor</h4>
                                <h4><strong>David Gee</strong>, Evangelist</h4>
                                <h4><strong>Cristiane Baker</strong>, Women’s Worker</h4>
                                <h4><strong>Elya Richardson</strong>, Youth Worker</h4>
                                <h4><strong>Anna Gee</strong>, Corner Pebble (Sunday School) Leader</h4>
                                <h4><strong>Thomas Elkhair</strong>, Music Team Coordinator</h4>
                                <h4><strong>Bethany Armstrong</strong>, Breaking the Silence Coordinator</h4>
                              </div>

                              <div className="col-md-6">
                                <h3 className="header-lightBlue text-center no-top-margin">Where are our ministry students now?</h3>
                                <h4><strong>Paul Hutchens</strong>, Pastor, <a href="https://soulchurch.org.au/">Soul Church</a>.</h4>
                                <h4><strong>R'jaye Rojas</strong>, Pastor, <a href="https://www.mspc.org.au/">Mount Stuart Presbyterian</a>.</h4>
                                <h4><strong>Andrew Hutchens</strong>, Graduate, <a href="https://www.christcollegehobart.com/">Christ College</a>.</h4>
                                <h4><strong>Michael Riske</strong>, current student, <a href="https://www.christcollegehobart.com/">Christ College</a>.</h4>
                              </div>
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
      </section >
    );
  }
}

export default OurPeople;
