import React, { Component } from 'react';
import MensMinistryImg from '../../../assets/ministry-men2.jpg';

class MensCalendar extends Component {

    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Men's Ministry Calendar 2018/2019</h1>
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
                                                <div className="content text-center">
                                                    <img className="img img-responsive" src={MensMinistryImg} alt="" />
                                                    <h4 className="header-lightBlue">WORK</h4>
                                                    <strong>SAT 24 NOV 2018</strong><br />
                                                    Waterworks Reserve Site 2<br />
                                                    8:00am-10:00am

                                                    <h4 className="header-lightBlue">LEADERSHIP</h4>
                                                    <strong>SAT 9 FEB 2019</strong>

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
                                    </div>  </div>



                            </div>




                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MensCalendar;
