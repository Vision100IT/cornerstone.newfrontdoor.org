/* eslint-disable */
import React, { Component } from 'react';


class WhereToFindUs extends Component {
  render() {
    return (
      <section>
        <div className="col-md-4 col-xs-12">
          <div className="region region-content-2-2">
            <div className="block block-block">
              <h2 className="header-lightBlue">Where to Find Us</h2>
              <div className="content">
                <div id="map_canvas" className="google-map" style={{ maxHeight: "360px" }}></div>
                <div><a href="https://goo.gl/maps/PAtkKDuPaQYGRUj7A" target="_blank" rel="noreferrer noopener">Cornerstone Presbyterian Church</a></div>
                <div>67 Federal Street</div>
                <div>North Hobart, Tasmania</div>  </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhereToFindUs;
