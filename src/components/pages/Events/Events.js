import React, { Component } from 'react';
import Calendar, { drupalClient } from '@newfrontdoor/calendar';
import WWAImg from '../../../assets/WWAImg.jpg'
import WWFImg from '../../../assets/WWFImg.jpg'
import systematicTheologyImg from '../../../assets/systematicTheology.png'
import entranceImg from '../../../assets/Entrance.jpg';
import prayerImg from '../../../assets/PrayerMeetings.png';
import config from 'react-global-configuration';

import Event from '../../models/Event';

const client = drupalClient(config.get("DRUPAL_EVENTS"))

class Events extends Component {

  render() {
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

                        <Calendar
                          client={client}
                          initialView={'month'}
                        />

                          <h4 className="header-lightBlue">Current Events</h4>
                          <div className="row">
                            <Event href="/PrayerMeetings" image={prayerImg} title="Prayer Meetings" />
                            <Event href="/WorshipServices" image={entranceImg} title="Worship Services" />
                            <Event href="/SystematicTheologyCourse" image={systematicTheologyImg} title="Systematic Theology" />
                          </div>

                          <h4 className="header-lightBlue">Past Events</h4>
                          <div className="row">
                            <Event href="https://www.facebook.com/WWATasmania/" target="_blank" rel="noreferrer noopener" image={WWAImg} title="Women’s Weekend Away" />
                            <Event href="/event/WomensWinterFestival" image={WWFImg} title="Women’s Winter Festival" />

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

export default Events;
