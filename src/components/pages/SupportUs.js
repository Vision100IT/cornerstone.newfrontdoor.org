import React, { Component } from 'react';

class SupportUs extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Support Us</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Support Us</span>
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

                          {/*<h4 className="header-lightBlue no-margin-bottom">Prayer Support</h4>
                          <p>Please see here for details of our regular weekly prayer meetings.</p>*/}

                          <h4 className="header-lightBlue no-margin-bottom">Financial Support</h4>
                          <p>There are three methods available for payment of Tithes and Offerings:</p>
                          <ol>
                            <li>Tithes and Offerings paid by Cash/Cheque may be placed in the “Blue Box” on Sunday morning.</li>
                            <br />
                            <li>Tithes and Offerings may be deposited directly into the following account:</li>
                            <br />
                            <ul style={{ listStyle: "none" }}>
                              <li>BSB: 037-001</li>
                              <li>Account Number: 586161</li>
                              <li>Account Name: Cornerstone Church</li>
                              <li>Reference: Your Name (this may need to be abbreviated if your name is too long) and what the payment is for. E.g. J.Bloggs-Offering</li>
                            </ul>
                            <br />
                            <li>Tithes and Offerings may also be made through by following the link below (processing fees apply):</li>
                            <br />
                            <ul style={{ listStyle: "none" }}>
                              <li><a href="https://tithe.ly/give?c=924155" rel="noreferrer noopener" target="_blank">Give using Tithe.ly</a></li>
                            </ul>
                          </ol>

                          <h4 className="header-lightBlue no-margin-bottom">Deacons Fund</h4>
                          <p>A Deacons fund was established in 2020 to provide practical help to those in our church and local community.</p>
                          <p>Tax deductible donations can be made into the following account:</p>
                          <br />
                          <ul style={{ listStyle: "none" }}>
                            <li>BSB: 067-002</li>
                            <li>Account Number: 10183412</li>
                            <li>Account Name: Presbyterian Emergency Fund</li>
                            <li>Description: Your Name CStone (E.g. J.Bloggs CStone)</li>
                            <li><strong>Note: A tax receipt will only be issued if we can clearly identify your name.</strong></li>
                          </ul>

                          <h4 className="header-lightBlue no-margin-bottom">Anti-Discrimination Defence Fund</h4>
                          <p>
                            An Anti-Discrimination Defence Fund was established in 2017 in response to changes to the Anti-Discrimination Act.
                        </p>

                          <p>
                            An anti-discrimination action was brought against Campbell Markham and David Gee in July 2017.
                            Although this action has since been dropped, the elders of the church consider that this case has ramifications far beyond our own church.
                            The freedom for all Australian Christians to communicate the gospel and Bible teaching to our community is under threat. We are committed to protecting this freedom, not just for Cornerstone but for the wider church.
                            Indeed we believe that the freedom of speech and conscience of every Australian, whether Christian or not, is threatened by such anti-discrimination actions.
                            We are therefore committed to fighting this action also for our wider community’s basic freedoms.
                        </p>


                          <p>Donations to the Anti-Discrimination Defence Fund may be deposited directly into the following account:</p>
                          <ul style={{ listStyle: "none" }}>
                            <li>BSB: 037-001</li>
                            <li>Account Number: 719374</li>
                            <li>Account Name: Cornerstone Church</li>
                            <li>Reference: Your Name (this may need to be abbreviated if your name is too long) E.g. J.Bloggs</li>
                          </ul>
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

export default SupportUs;
