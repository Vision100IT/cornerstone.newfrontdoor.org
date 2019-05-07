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
                          <p>Tithes and Offerings may be placed in the “Blue Box” on Sunday morning.<br /><br />

                            Tithes and Offerings may also be deposited directly into the following account:</p>
                          <ul style={{ listStyle: "none" }}>
                            <li>BSB: 037-001</li>
                            <li>Account Number: 586161</li>
                            <li>Account Name: Cornerstone Church</li>
                            <li>Reference: Your Name (this may need to be abbreviated if your name is too long) and what the payment is for. E.g. J.Bloggs-Offering</li>
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
