import React, { Component } from 'react';

import kindleApp from '../../../assets/kindleApp.png';
import bookCover from '../../../assets/who-should-i-marry.jpg';

class EngagedCouples extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>For Engaged Couples</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Resources</span>
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

                      <h2 className="header-lightBlue">Who Should I Marry?</h2>
                      <h4>a guide for Christians – Kindle Edition</h4>
                      </div>
                      <div>by <a className="a-link-normal" href="http://www.amazon.com/s/ref=dp_byline_sr_ebooks_1?ie=UTF8&amp;text=Campbell+Markham&amp;search-alias=digital-text&amp;field-author=Campbell+Markham&amp;sort=relevancerank">Campbell Markham</a> (Author)</div>
                      </div>
                      <div>
                      <p><a href="http://www.amazon.com/Who-Should-Marry-guide-Christians-ebook/dp/B012ZMUVPE/ref=sr_1_1?s=digital-text&amp;ie=UTF8&amp;qid=1456136589&amp;sr=1-1&amp;keywords=Who+should+i+marry" target="_blank" rel="noopener noreferrer">View at Amazon.com here…</a></p>
                      <hr/>
                      </div>


                      </div>

                      <br/>

                      <div className="row">
                        <div className="col-md-4">
                        <a href="http://www.amazon.com/Who-Should-Marry-guide-Christians-ebook/dp/B012ZMUVPE/ref=sr_1_1?s=digital-text&amp;ie=UTF8&amp;qid=1456136589&amp;sr=1-1&amp;keywords=Who+should+i+marry" target="_blank" rel="noopener noreferrer" >
                        <img src={bookCover} alt="whoshouldimarry" width="322" height="510"/></a>
                        </div>

                        <div className="col-md-8">
                        <p>Who should I marry? It’s one of the biggest questions you may face!<br/>
                        This booklet helps you to answer this question from the Bible’s teaching about marriage.</p>
                        <p>This isn’t just for Christian singles. The already-married will find it helpful to reset their thinking and priorities as they look afresh at God’s three basic purposes for marriage.</p>
                        <p>Pastors and counsellors will also find this a useful tool for guiding those who are contemplating marriage.<br/><br/>
                        <a href="http://www.amazon.com/Who-Should-Marry-guide-Christians-ebook/dp/B012ZMUVPE/ref=sr_1_1?s=digital-text&amp;ie=UTF8&amp;qid=1456136589&amp;sr=1-1&amp;keywords=Who+should+i+marry" target="_blank" rel="noopener noreferrer">
                        <img src={kindleApp} alt="devices" width="200" height="100"/ ></a></p><br/>
                        <p>The booklet addresses as well God’s purposes for Christian singles, and how best to approach marriage.</p>
                        <p>With discussion questions at the end, this booklet would make an ideal small group topical Bible study.</p>
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

export default EngagedCouples;
