/* eslint-disable */
import React, { Component } from 'react';

import _ from 'lodash'
import { decode } from 'he'
import { getFromDrupalAPI, searchDrupalSermons } from '../../../utils/fetchJSON';

import '../../../assets/css/allsermonspage/css_ctvtxTMYPLy1gdv3lVTneGtWHVwWHoP476bpbqSql9o.css';
import '../../../assets/css/allsermonspage/css_nnBtPUJp1fJS2GsB41ThE6FDdZwUsGHSwaEUER2e1oo.css';
import '../../../assets/css/allsermonspage/css_PGbJgHCUCBf4dg7K9Kt8aAwsApndP4GZ9RuToPy3-Fk.css';
import '../../../assets/css/allsermonspage/css_TRZgPl9A0LjXjIaop2Mnuyu5AAgskji-vAnShbyyBXY.css';
import '../../../assets/css/allsermonspage/css_uyDmOe2sjPMSKgtMaUqVxDRgnvOYkOnT_tIsvpiVsRg.css';
import '../../../assets/css/allsermonspage/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css';
import '../../../assets/css/allsermonspage/css_YLWdW6wV7Ski57_eSxMdUCyO9zKEBlsYDkC-PNa2_KM.css';

import sermonSeriesImage from '../../../assets/sermonSeriesImage.jpg';

const SERMON_LIMIT = 50;

class Sermons extends Component {
  constructor() {
    super();
    this.state = {
      sermons: null,
      sermonSeries: null,
      latestSermon: null
    }
  }

  componentWillMount() {
    var that = this;

    getFromDrupalAPI('all_sermon_series_api', function (data) {
      that.setState({ sermonSeries: data });
    });

    getFromDrupalAPI('all_sermons_api?limit=' + SERMON_LIMIT, function (data) {
      that.setState({ sermons: data });
      that.setState({ latestSermon: data[0] });
    });

  }
  render() {

    if (!this.state.sermons || !this.state.latestSermon) {
      var sermons = <tr><td>Loading, please wait.</td></tr>;
      var latestSermon = <div>Loading, please wait.</div>
    }
    else {
      var tdPadding = { padding: "0px 5px 0px 5px" };
      var sermons = _.map(this.state.sermons, (sermon) => {
        return (
          <tr key={_.uniqueId()} className="odd even">
            {sermon.node_title ? <td style={tdPadding} dangerouslySetInnerHTML={{ __html: sermon.node_url }} /> : <td style={tdPadding}></td>}
            <td style={tdPadding}>{sermon.sermonseries ? decode(sermon.sermonseries) : ''}</td>
            <td style={tdPadding}>{sermon.text ? decode(sermon.text) : ''}</td>
            <td style={tdPadding}>{decode(sermon.preacher)}</td>
            <td style={tdPadding}>{sermon.datepreached}</td>
            <td style={tdPadding}><a href={sermon.url} target="_blank"> [Download]</a></td>
          </tr>
        )
      });

    }

    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Sermons</h1>
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







        <div className="container">
          <div className="region region-content-4">



            <h2 className="header-lightBlue text-center-sm">All Sermons</h2>

            <div className="content">
              <div className="view view-All-Sermons view-id-All_Sermons view-display-id-block_1 view-dom-id-f3bb1cab640987c3e343139ca9822fc5">
                <div className="view-header">
                  Here you'll find our latest sermons listed in reverse order from latest preached.  If you're searching for something specific, or an older sermon, then click <a href="/allsermons">here</a> to find all our sermons in a searchable table.    </div>



                <div className="view-content">
                  <table className="views-table cols-6">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Sermon Series</th>
                        <th>Bible Passage(s)</th>
                        <th>Preacher</th>
                        <th>Date Preached</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sermons}
                    </tbody>
                  </table>
                </div>






              </div>
            </div>  </div>
        </div>
      </section>
    );
  }
}

export default Sermons;
