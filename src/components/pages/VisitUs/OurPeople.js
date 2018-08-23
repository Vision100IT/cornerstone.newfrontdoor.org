import React, { Component } from 'react';

//They want to use silouettes until new images have been created
//Will update when I find some decent sillouettesj
import Campbell from '../../../assets/people/Campbell.jpg';
import Rafael from '../../../assets/people/Rafael.jpg';
import Simon from '../../../assets/people/Simon.jpg';
import Des from '../../../assets/people/Des.jpg';
import Derrick from '../../../assets/people/Derrick.jpg';
import Nathaniel from '../../../assets/people/Nathaniel.jpg';

import Trish from '../../../assets/people/Trish.jpg';
import David from '../../../assets/people/David.jpg';
import Jane from '../../../assets/people/Jane.jpg';
import Libby from '../../../assets/people/Libby.jpg';


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

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={Campbell} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    Campbell Markham
                                  </div>
                                  <div className="person-title text-center">
                                    Pastor
                                  </div>
                              </div>

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={Des} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    Des Richardson
                                  </div>
                                  <div className="person-title text-center">
                                    Session Clerk
                                  </div>
                              </div>

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={Rafael} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    Rafael Muggeridge
                                  </div>
                                  <div className="person-title text-center">
                                    Elder
                                  </div>
                              </div>

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={Simon} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    Simon Boonstra
                                  </div>
                                  <div className="person-title text-center">
                                    Elder
                                  </div>
                              </div>



                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={Derrick} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    Derrick<br/> Clack
                                  </div>
                                  <div className="person-title text-center">
                                    Elder
                                  </div>
                              </div>

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={Nathaniel} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    Nathaniel Richardson
                                  </div>
                                  <div className="person-title text-center">
                                    Elder
                                  </div>
                              </div>

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src="" alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    James Baker
                                  </div>
                                  <div className="person-title text-center">
                                    Elder
                                  </div>
                              </div>

                            </div>
                            <div className="row">
                            <div className="col-md-12">

                              <h2 className="header-lightBlue text-center">Deacons</h2>

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={Trish} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    Trish <br/> Smith
                                  </div>
                                  <div className="person-title text-center">
                                    Deacon
                                  </div>
                              </div>

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={David} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    David Van <br/> Emerick
                                  </div>
                                  <div className="person-title text-center">
                                    Deacon
                                  </div>
                              </div>

                              <div className="person-container col-md-3">
                                  <div className="person-image">
                                    <img className="image-center" src={Jane} alt=""/>
                                  </div>
                                  <div className="person-name text-center">
                                    Jane <br/> Maarseven
                                  </div>
                                  <div className="person-title text-center">
                                    Deacon
                                  </div>
                              </div>
                              </div>


                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <h2 className="header-lightBlue text-center">Board of Management</h2>
                                <p className="text-center"><strong>Contact:  <a href="mailto:bom@cornerstonehobart.com" >bom@cornerstonehobart.com</a></strong></p>

                                <div className="person-container col-md-3">
                                    <div className="person-image">
                                      <img className="image-center" src={David} alt=""/>
                                    </div>
                                    <div className="person-name text-center">
                                      David Van Emmerik
                                    </div>
                                    <div className="person-title text-center">
                                      Secretary
                                    </div>
                                  </div>

                                    <div className="person-container col-md-3">
                                        <div className="person-image">
                                          <img className="image-center" src={Libby} alt=""/>
                                        </div>
                                        <div className="person-name text-center">
                                          Libby Dilger
                                        </div>
                                        <div className="person-title text-center">
                                          Treasurer
                                        </div>
                                    </div>

                                    <div className="person-container col-md-3">
                                        <div className="person-image">
                                          <img className="image-center" src="" alt=""/>
                                        </div>
                                        <div className="person-name text-center">
                                          Heinz Maarseveen
                                        </div>
                                        <div className="person-title text-center">

                                        </div>
                                    </div>

                                    <div className="person-container col-md-3">
                                        <div className="person-image">
                                          <img className="image-center" src={Jane} alt=""/>
                                        </div>
                                        <div className="person-name text-center">
                                          Jane Maarseveen
                                        </div>
                                        <div className="person-title text-center">

                                        </div>
                                    </div>

                                    <div className="person-container col-md-3">
                                        <div className="person-image">
                                          <img className="image-center" src={Trish} alt=""/>
                                        </div>
                                        <div className="person-name text-center">
                                          Trish Smith
                                        </div>
                                        <div className="person-title text-center">

                                        </div>
                                    </div>

                                    <div className="person-container col-md-3">
                                        <div className="person-image">
                                          <img className="image-center" src="" alt=""/>
                                        </div>
                                        <div className="person-name text-center">
                                          Amy Glynn
                                        </div>
                                        <div className="person-title text-center">

                                        </div>
                                    </div>
                                </div>
                              </div>


                            <div className="row">
                              <div className="col-md-6">
                                <h3 className="header-lightBlue text-center">Ministry Team</h3>
                                <h4><strong>Campbell Markham</strong>, Pastor</h4>
                                <h4><strong>Joe Cox</strong>, Trainee to the Pastor</h4>
                                <h4><strong>David Gee</strong>, Evangelist</h4>
                                <h4><strong>Cristiane Baker</strong>, Women’s Worker</h4>
                                <h4><strong>Elya Richardson</strong>, Youth Worker</h4>
                                <h4><strong>Anna Gee</strong>, Corner Pebble (Sunday School) Leader</h4>
                                <h4><strong>Thomas Elkhair</strong>, Music Team Coordinator</h4>
                                <h4><strong>Bethany Armstrong</strong>, Breaking the Silence Coordinator</h4>
                              </div>

                              <div className="col-md-6">
                                <h3 className="header-lightBlue text-center">Where are our ministry students now?</h3>
                                <h4><strong>Paul Hutchens</strong>, Pastor, <a href="https://soulchurch.org.au/">Soul Church</a>.</h4>
                                <h4><strong>R&apos;jaye Rojas</strong>, Pastor, <a href="https://www.mspc.org.au/">Mount Stuart Presbyterian</a>.</h4>
                                <h4><strong>Andrew Hutchens</strong>, Graduate, Christ College.</h4>
                                <h4><strong>Michael Riske</strong>, current student, Christ College.</h4>
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
      </section>
    );
  }
}

export default OurPeople;
