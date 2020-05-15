import React, { Component } from 'react';
import Script from 'react-load-script'


class UpcomingEventsElvanto extends Component {
  constructor(props) {
    super(props);
    this.state = { scriptLoaded: false }
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }
  render() {

    var upcomingEvents = <i className="fa fa-spinner"></i>;
    if (this.state.scriptLoaded === true) {
      upcomingEvents = ''
    }

    return (
      <section>
        <div className="col-md-4 col-xs-12">  <div className="region region-content-2-3">

          <div className="block block-block">

            <h2 className="header-lightBlue">Upcoming Events</h2>

            <div className="content">
              <div className="upcoming-events">
                {upcomingEvents}
                <div id="elvanto-events-8928"></div>
                <Script
                  url="https://cornerstonehobart.elvanto.com.au/calendar_embed.js?c[]=aa8432a3-6bea-4c8f-8ddc-a48c2648494c&ca[]=services&events=1&upcoming[count]=2&upcoming[timeframe]=m&max=5&el_id=8928"
                  /*onCreate={this.handleScriptCreate.bind(this)}
                  onError={this.handleScriptError.bind(this)}*/
                  onLoad={this.handleScriptLoad.bind(this)}
                />
              </div>
              <p>For a full list of our events, <a href="/Events" title="View full calendar">click here</a>.</p>
            </div>
          </div>
        </div>
        </div>

      </section>
    );
  }
}

export default UpcomingEventsElvanto;
