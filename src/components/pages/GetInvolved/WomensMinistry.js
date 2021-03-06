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
                  <h1>Women's Ministry</h1>
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
                              <img className="img-responsive t2Women-img" src={t2Women} alt="" />
                              <h2 className="header-lightBlue">Why T2 Women?</h2>
                              <p className="ministry-text"><strong>Biblically, a Titus 2 Woman is defined by , Titus 2:3-5,</strong><br /><br />
                                “Likewise, teach the older women to be reverent in the way they live, not to be slanderers, or addicted to much wine, but to teach what is good. Then they can train the younger women to love their husbands and children, to be self-controlled and pure, to be busy at home, to be kind, and to be subject to their husbands, so that no one will malign the word of God.”
                              </p>

                              <p className="padding-top-30">
                                The Titus 2 woman dwells in relationship with:
                                <ul>
                                  <li className="padding-top-15">her God</li>
                                  <li className="padding-top-15">her husband</li>
                                  <li className="padding-top-15">her children</li>
                                  <li className="padding-top-15">her friends</li>
                                </ul>
                              </p>

                              <p className="padding-top-30">Her sphere of influence radiates from her relationship with God – He is her Father, her Lord and Saviour, and the Ruler of her heart.</p>
                              <p>We desire to see every woman, young and old, develop a deeper relationship with God.</p>
                              <p>We encourage one another to be faithful disciples of Jesus Christ, pointing each other to the One who is the author and finisher of our faith.</p>
                              <p>As we “do life” together we aim to be intentional in everything we do, to promote Godly wisdom and to shun worldly wisdom, to the glory of God.</p>

                              <p className="padding-top-30">
                                We follow and recommend resources from <a href="https://www.reviveourhearts.com" rel="noreferrer noopener" target="_blank">www.reviveourhearts.com</a>
                              </p>

                              <p>
                                For more information contact our Women's worker, Cristiane Baker - phone: 0404 392 912 or email <a href="mailto:cbaker@cornerstonehobart.com">cbaker@cornerstonehobart.com</a>.
                              </p>

                              <h2 className="header-lightBlue">Women’s Weekend Away (WWA)</h2>
                              <p className="ministry-text"><strong>What’s it all about?</strong><br /><br />
                                One weekend a year, the Presbyterian Church of Tasmania hosts a weekend for all women to gather together for a time of biblical teaching, worshiping together and encouragement. <br />
                                For more information, visit the WWA Facebook page: <a href="https://www.facebook.com/WWATasmania/" rel="noreferrer noopener" target="_blank">/WWATasmania</a>.

                              </p>

                            </div>

                          </div>
                          <div className="row padding-top-40 text-center">
                          <h4>Upcoming Women’s Ministry Events are included on our <a href="/Events">Calendar of Events</a>.</h4>
                            
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
