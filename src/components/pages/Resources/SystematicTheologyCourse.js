import React, { Component } from 'react';

import overviewImg from '../../../assets/systematicTheologyOverview.jpg'
import notes from '../../../assets/notes.png'
import youtube from '../../../assets/youtube.jpg'

class SystematicTheologyCourse extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Systematic Theology Course</h1>
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
                        <div className="content text-center">
                          <div className="col-md-4" style={{ marginBottom: "50px" }}>
                            <a href="/SystematicTheologyOverview"><img src={overviewImg} alt=""></img></a>
                          </div>
                          <div className="col-md-4" style={{ marginBottom: "50px" }}>
                            <a href="https://www.youtube.com/channel/UCF-sudt_zfl2Ni8eR9ayVHQ" target="_blank" rel="noreferrer noopener"><img src={youtube} alt=""></img></a><br />
                            Find recordings of our past lessons on Youtube.
                          </div>
                          <div className="col-md-4" style={{ marginBottom: "50px" }}>
                            <a href="/SystematicTheologyNotes"><img src={notes} alt=""></img></a>
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

export default SystematicTheologyCourse;
