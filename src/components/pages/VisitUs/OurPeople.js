import React, { Component } from 'react';

import Male from '../../../assets/people/Male.png';
//import Female from '../../../assets/people/Female.png';
import cristianeImg from '../../../assets/people/Baker,Cristiane.png';
import jamesImg from '../../../assets/people/Baker,James.png';
import simonImg from '../../../assets/people/Boonstra,Simon.png';
import derrickImg from '../../../assets/people/Clack,Derrick.png';
import joeImg from '../../../assets/people/Cox,Joe.png';
import libbyImg from '../../../assets/people/Dilger,Libby.png';
import amyImg from '../../../assets/people/Glynn,Amy.png';
import heinzImg from '../../../assets/people/Maarseveen,Heinz.png';
import janeImg from '../../../assets/people/Maarseveen,Jane.png';
import campbellImg from '../../../assets/people/Markham,Campbell.png';
import rafImg from '../../../assets/people/Muggeridge,Raf.png';
import desImg from '../../../assets/people/Richardson,Des.png';
import elyaImg from '../../../assets/people/Richardson,Elya.png';
import nathanielImg from '../../../assets/people/Richardson,Nathaniel.png';
import trishImg from '../../../assets/people/Smith,Trish.png';
import davidImg from '../../../assets/people/VanEmmerik,David.png';


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

                              <Person name="James Baker" title="Elder" image={jamesImg} />
                              <Person name="Simon Boonstra" title="Elder" image={simonImg} />
                              <Person name="Derrick Clack" title="Elder" image={derrickImg} />
                              <Person name="Campbell Markham" title="Pastor" image={campbellImg} />
                              <Person name="Rafael Muggeridge" title="Elder" image={rafImg} />
                              <Person name="Des Richardson" title="Elder" image={desImg} />
                              <Person name="Nathaniel Richardson" title="Elder" image={nathanielImg} />






                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">

                              <h2 className="header-lightBlue text-center">Deacons</h2>
                              <Person name="Amy Glynn" title="Deacon" image={amyImg} />
                              <Person name="Jane Maarseveen" title="Deacon" image={janeImg} />
                              <Person name="Trish Smith" title="Deacon" image={trishImg} />
                              <Person name="David Van Emmerik" title="Deacon" image={davidImg} />



                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="header-lightBlue text-center">Board of Management</h2>
                              <p className="text-center"><strong>Contact:  <a href="mailto:bom@cornerstonehobart.com" >bom@cornerstonehobart.com</a></strong></p>

                              <p className="text-center  padding-bottom-15"><strong>Cornerstone Elders are ex officio members of the Board of Management</strong></p>


                              <Person name="Libby Dilger" title="Treasurer" image={libbyImg} />
                              <Person name="Amy Glynn" title="" image={amyImg} />
                              <div className="clearfix hideForPC"></div>
                              <Person name="Heinz Maarseveen" title="" image={heinzImg} />
                              <Person name="Jane Maarseveen" title="" image={janeImg} />
                              <div className="clearfix"></div>
                              <div className="col-md-3"></div>

                              <Person name="Trish Smith" title="" image={trishImg} />
                              <Person name="David Van Emmerik" title="Secretary" image={davidImg} />

                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="header-lightBlue text-center">Church Staff</h2>

                              <div className="row">
                                <Person name="Cristiane Baker" title="Women's Worker" image={cristianeImg} />
                                <Person name="Joe Cox" title="Assistant to the Minister" image={joeImg} />
                                <Person name="Libby Dilger" title="Administrator" image={libbyImg} />
                                <Person name="David Gee" title="Evangelist" image={Male} />
                                <div className="clearfix"></div>
                                <div className="col-md-3"></div>
                                <Person name="Campbell Markham" title="Pastor" image={campbellImg} />
                                <Person name="Elya Richardson" title="Youth Worker" image={elyaImg} />

                              </div>



                            </div>
                          </div>
                          <br /><br />


                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="header-lightBlue text-center">Volunteers</h2>
                              <h4><strong>Bethany Armstrong</strong>, Breaking the Silence Coordinator</h4>
                              <h4><strong>Thomas Elkhair</strong>, Music Team Coordinator</h4>
                              <h4><strong>Anna Gee</strong>, Corner Pebble (Sunday School) Leader</h4>
                              <br />
                            </div>
                          </div>
                          <br /><br />

                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="header-lightBlue text-center">Where are our ministry students now?</h2>

                              <h4><strong>Andrew Hutchens</strong>, Graduate, <a href="https://christcollege.edu.au/" target="_blank" rel="noreferrer noopener">Christ College</a>.</h4>
                              <h4><strong>Paul Hutchens</strong>, Pastor, <a href="https://soulchurch.org.au/" target="_blank" rel="noreferrer noopener">Soul Church</a>.</h4>
                              <h4><strong>Michael Riske</strong>, current student, <a href="https://christcollege.edu.au/" target="_blank" rel="noreferrer noopener">Christ College</a>.</h4>
                              <h4><strong>R'jaye Rojas</strong>, Pastor, <a href="https://www.mspc.org.au/" target="_blank" rel="noreferrer noopener">Mount Stuart Presbyterian</a>.</h4>


                            </div>
                          </div>
                          <br /><br />


                          <div className="row">
                            <div className="col-md-6">

                            </div>

                            <div className="col-md-6">

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

      </section >
    );
  }
}

export default OurPeople;
