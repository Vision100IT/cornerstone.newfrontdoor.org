import React, { Component } from 'react';


class Welcome extends Component {
  render() {
    return (
      <section>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                  <div className="content">
                    <div className="node node-page clearfix">
                      <div className="content">
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* /main-content-region */}
            </div> {/* /row */}
          </div> {/* /container */}
        </div> {/* /content-region */}
      </section>
    );
  }
}

export default Welcome;
