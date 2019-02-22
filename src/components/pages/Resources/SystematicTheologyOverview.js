import React, { Component } from 'react';
import _ from 'lodash'
import { decode } from 'he'
import { getFromDrupalAPI } from '../../../utils/fetchJSON';
import notesImg from '../../../assets/notes.png';
import play from '../../../assets/play.png';
import playpt1 from '../../../assets/playpt1.png';
import playpt2 from '../../../assets/playpt2.png';


class SystematicTheologyOverview extends Component {
  constructor() {
    super();
    this.state = {
      resources: null,
    }
  }

  componentWillMount() {
    var that = this;

    getFromDrupalAPI('systematic_theology_resources_api', function (data) {
      that.setState({ resources: data });
    });
  }

  render() {
    var SysTheoResources;
    if (!this.state.resources) {
      SysTheoResources = <tr><td><i className="fa fa-spinner"></i></td></tr>;
    }
    else {
      var tdPadding = { padding: "0px 5px 0px 5px" };
      var unitTitles = []
      var unitTitle;
      SysTheoResources = _.map(this.state.resources, (resource) => {
        unitTitle = "";
        if (unitTitles.indexOf(resource.unit) === -1) {
          unitTitles.push(resource.unit);
          unitTitle = resource.unit;

        }
        if (resource.youtube) {
          if (resource.youtube.indexOf(',') > 0) {
            var splitLinks = resource.youtube.split(", ");
            var multiPart1 = splitLinks[0];
            var multiPart2 = splitLinks[1];
          }
          else if (resource.youtube !== []) {
            var singleLink = resource.youtube;
          }
        }
        return (
          <tr key={_.uniqueId()} className="odd even systematic-theology-resources">
            {unitTitle ? <td className="systematic-theology-resources unit-title" style={tdPadding}>{decode(unitTitle)}</td> : <td className="systematic-theology-resources" style={tdPadding}></td>}
            {resource.node_title ? <td className="systematic-theology-resources   no-left-right-border" style={tdPadding}>{decode(resource.node_title)}</td> : <td className="systematic-theology-resources" style={tdPadding}></td>}
            <td className="systematic-theology-resources no-left-right-border" style={tdPadding}>
              {resource.notes ? <a href={resource.notes} target="_blank" rel="noreferrer noopener"><img className="notes-btn img img-responsive" src={notesImg} alt="" /></a> : ''}
              {multiPart1 ? <a href={multiPart1} target="_blank" rel="noreferrer noopener"><img className="play-btn img img-responsive" src={playpt1} alt="" /></a> : ''}
              {multiPart2 ? <a href={multiPart2} target="_blank" rel="noreferrer noopener"><img className="play-btn img img-responsive" src={playpt2} alt="" /></a> : ''}
              {singleLink ? <a href={singleLink} target="_blank" rel="noreferrer noopener"><img className="play-btn img img-responsive" src={play} alt="" /></a> : ''}
            </td>
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
                        <div className="content">
                          <h3 className="header-lightBlue text-center">Two-year Systematic Theology Course, 2018-19</h3>
                          <p>
                            Systematic Theology is the study of the truths of the Bible, grouped and arranged according to a logical system.
                            Systematic Theology helps us to acquire a deeper and wider grasp of all the truths of the Bible, and how these truths integrate.
                            When we deepen and widen our theology, we are transformed and equipped to withstand harmful falsehoods, and to know God’s truth and will for our lives.
                            Studying Systematic Theology is putting into action the command of Paul in Romans 12:2, “Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind.”
                            </p>
                          <br />
                          <p>
                            The course is taught by Campbell Markham, Pastor of Cornerstone Presbyterian Church Hobart.
                            Campbell is an ordained minister in the Presbyterian Church of Australia, is passionate about God’s Word, and has been employed in fulltime Ministry for almost twenty years.
                            Guest speakers may be invited from time-to- time to assist with specific topics. The Westminster Confession of Faith (1646), which is itself a classic systematic theology, forms the doctrinal standard of the course.
                          </p>

                          <h3 className="header-lightBlue no-bottom-margin">Theology leads to Doxology</h3>

                          <div className="">Theology (the study of God) must always lead to Doxology (the praise of God.)</div>

                          <h3 className="header-lightBlue no-bottom-margin">Course Details</h3>
                          <h4 className="no-bottom-margin no-top-margin">There are two levels of Course Participation available:</h4>
                          <div className="margin-top-10 margin-left-30">
                            <h4 className="margin-top-5">Full</h4>
                            <ul>
                              <li>Attend lectures on Tuesday nights (in person or via our <a href="https://www.youtube.com/channel/UCF-sudt_zfl2Ni8eR9ayVHQ" target="_blank" rel="noreferrer noopener">YouTube channel</a>), including participating it ten-minute review quizzes at the beginning of each lecture.</li>
                              <li>Complete the prescribed reading for each lecture (about fifty pages per week).</li>
                              <li>Submit a non-academic essay (select from a short list of essay questions, essay to be approx. 1,000 to 2,000 words, due 2 weeks after the unit ends).</li>
                            </ul>

                            <h4 className="margin-top-5">Audit</h4>
                            <ul>
                              <li>Attend lectures on Tuesday nights (in person or via our <a href="https://www.youtube.com/channel/UCF-sudt_zfl2Ni8eR9ayVHQ" target="_blank" rel="noreferrer noopener">YouTube channel</a>), including participating it ten-minute review quizzes at the beginning of each lecture.</li>
                              <li>Alternatively you can work through the units at your own pace using the hyperlinks to the notes and YouTube recordings provided below.</li>
                            </ul>
                          </div>


                          <h4 className="no-bottom-margin">Textbook</h4>
                          <p>
                            Those participating in the full program will need to purchase John Frame’s Systematic Theology (Presbyterian &amp; Reformed Publishers, 2013). This normally retails at Koorong for $60 and is an excellent long-term reference tool.
                            </p>

                          <h4 className="no-bottom-margin">Certification</h4>
                          <p>
                            The course is completely “in-house”. Those who complete the “full” course will be issued a certificate of completion by Cornerstone Presbyterian Church.
                          </p>

                          <h4 className="no-bottom-margin">Cost</h4>
                          <p>
                            Free
                          </p>

                          <h3 className="header-lightBlue no-bottom-margin">Additional Information</h3>
                          <p>
                            For lecture details (venue, dates, times, etc.) email <a href="mailto:systematictheology@cornerstonehobart.com">systematictheology@cornerstonehobart.com</a> or contact Course Coordinator, Cristiane Baker, on 0404 392 812.
                          </p>

                          <h3 className="header-lightBlue">Course Units</h3>
                          <table className="resources-table">
                            <tbody className="systematic-theology-resources0">
                              {SysTheoResources}
                            </tbody>

                          </table>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>



              </div>




            </div>
          </div>
        </div >
      </section >
    );
  }
}

export default SystematicTheologyOverview;
