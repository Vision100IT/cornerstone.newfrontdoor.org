import React, { Component } from 'react';
import _ from 'lodash'
import { decode } from 'he'
import { getFromDrupalAPI } from '../../../utils/fetchJSON';
import notesImg from '../../../assets/notes.png';
import quizImg from '../../../assets/quiz.png';
import play from '../../../assets/play.png';
import playpt1 from '../../../assets/playpt1.png';
import playpt2 from '../../../assets/playpt2.png';


class BibleCourses extends Component {
  constructor() {
    super();
    this.state = {
      resources: null,
    }
  }

  componentWillMount() {
    var that = this;

    getFromDrupalAPI('bible_courses_api', function (data) {
      that.setState({ resources: data });
    });
  }

  render() {
    var BibleCourseResources;
    if (!this.state.resources) {
      BibleCourseResources = <tr><td><i className="fa fa-spinner"></i></td></tr>;
    }
    else {
      var tdPadding = { padding: "0px 5px 0px 5px" };
      var unitTitles = []
      var unitTitle;
      BibleCourseResources = this.state.resources.map(resource => {
        unitTitle = "";
        if (unitTitles.indexOf(resource.course) === -1) {
          unitTitles.push(resource.course);
          unitTitle = resource.course;

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
              {resource.quiz ? <a href={resource.quiz} target="_blank" rel="noreferrer noopener"><img className="notes-btn img img-responsive" src={quizImg} alt="" /></a> : <span className="course-item-margin" />}
              {resource.notes ? <a href={resource.notes} target="_blank" rel="noreferrer noopener"><img className="notes-btn img img-responsive" src={notesImg} alt="" /></a> : <span className="course-item-margin" />}
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
                  <h1>Bible Courses</h1>
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
                          <h3 className="header-lightBlue">Bible Courses</h3>
                          <table className="resources-table">
                            <tbody className="systematic-theology-resources0">
                              {BibleCourseResources}
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

export default BibleCourses;
