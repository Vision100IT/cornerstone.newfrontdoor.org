import React, { Component } from 'react';

import t2Women from '../../../assets/T2Women.png';

class WomensMinistry extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Women&apos;s Ministry</h1>
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
                            <div className=" col-md-12 col-xs-12">
                              <img className="img-responsive" src={t2Women} alt="" />
                              <h2 className="header-lightBlue">Why T2 Women?</h2>
                              <p className="ministry-text"><strong>Biblically, a Titus 2 Woman is defined by , Titus 2:3-5,</strong><br />
                                “Likewise, teach the older women to be reverent in the way they live, not to be slanderers, or addicted to much wine, but to teach what is good. Then they can train the younger women to love their husbands and children, to be self-controlled and pure, to be busy at home, to be kind, and to be subject to their husbands, so that no one will malign the word of God.”
                              <br /><br />

                              </p>
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

export default WomensMinistry;
