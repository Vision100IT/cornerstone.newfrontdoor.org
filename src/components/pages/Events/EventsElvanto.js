import React, { Component } from 'react';
import Script from 'react-load-script'

class EventsElvanto extends Component {
  constructor(props) {
    super(props);
    this.state = { scriptLoaded: false }
  }
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  render() {
    var loading = <i className="fa fa-spinner"></i>
    if (this.state.scriptLoaded === true) {
      loading = ''
    }
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Events</h1>
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
                        <div className="content">
                          {loading}
                          <div id="elvanto-calendar-8176"></div>
                          <Script
                            url="https://tithely-5d81b10dadb1d-924155.elvanto.com.au/calendar_embed.js?c[]=aa8432a3-6bea-4c8f-8ddc-a48c2648494c&ca[]=services&ca[]=groups&fd=s&el_id=8176"
                            /*onCreate={this.handleScriptCreate.bind(this)}
                            onError={this.handleScriptError.bind(this)}*/
                            onLoad={this.handleScriptLoad.bind(this)}
                          />
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

export default EventsElvanto;
