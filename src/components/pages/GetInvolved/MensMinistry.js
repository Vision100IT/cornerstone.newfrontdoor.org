/* eslint-disable */
import React, { Component } from 'react';
import MensMinistryImg from '../../../assets/ministry-men2.jpg';

class MensMinistry extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Men&apos;s Ministry</h1>
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
                            <div className=" col-md-4 col-xs-12">
                              <p className="ministry-text" style={{ fontWeight: "bold" }}>
                                <em>Proverbs 29:23: "A man's pride brings him low, but a man of lowly spirit gains honor"</em>
                              </p>
                              <img src={MensMinistryImg} width="258" height="196" />

                            </div>
                            <div className=" col-md-8 col-xs-12">
                              <p className="ministry-text">
                                Our men meet together for fellowship and for mutual support in their roles as leaders in their families and within the Church.
                                A number of men’s breakfasts and other events are held throughout the year.
                            </p>
                              <br />
                              <p className="ministry-text">
                                If you would like to be placed on the list to receive email notifications of Men’s Ministry functions,
                            please email <a href="mailto:admin@cornerstonehobart.com">admin@cornerstonehobart.com</a>.
                            </p>

                            </div>

                          </div>

                          <div className="row padding-top-15 text-center">
                            <h3>Upcoming Events</h3>
                            <h4 className="header-lightBlue">COMBINED MEN’S/WOMEN’S MINISTRY EVENT</h4>
                            <strong>FAMILY ACCORDING TO GOD’S WILL</strong><br />
                            <strong>GUEST SPEAKERS: SCOTT & LYNN WINKLER</strong><br />
                            <strong>SAT 19 JAN 2019</strong>

                            <h4 className="header-lightBlue">LEADERSHIP</h4>
                            <strong>SAT 16 FEB 2019</strong>

                            <h4 className="header-lightBlue">PROVISION</h4>
                            <strong>SAT 23 MAR 2019</strong>

                            <h4 className="header-lightBlue">FATHERHOOD</h4>
                            <strong>SAT 25 MAY 2019</strong>

                            <h4 className="header-lightBlue">A MAN’S ROLE IN RELATIONSHIPS</h4>
                            <strong>SAT 3 AUG 2019</strong>

                            <h4 className="header-lightBlue">MANAGING MONEY</h4>
                            <strong>SAT 19 OCT 2019</strong>

                            <h4 className="header-lightBlue">MANAGING TIME</h4>
                            <strong>SAT 23 NOV 2019</strong>
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

export default MensMinistry;
