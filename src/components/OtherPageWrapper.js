/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import OtherPageContent from './OtherPageContent';

import GrowthGroups from './pages/GetInvolved/GrowthGroups';
import MensMinistry from './pages/GetInvolved/MensMinistry';
import QuarryYouth from './pages/GetInvolved/QuarryYouth';
import StreetEvangelism from './pages/GetInvolved/StreetEvangelism';
import WomensMinistry from './pages/GetInvolved/WomensMinistry';
//import YoungAdults from './pages/GetInvolved/YoungAdults';

import Cornerpost from './pages/Resources/Cornerpost';
import EngagedCouples from './pages/Resources/EngagedCouples';
import AllSermons from './pages/Resources/AllSermons';
import Sermons from './pages/Resources/Sermons';
import SermonPage from './pages/Resources/SermonPage';
import SystematicTheologyNotes from './pages/Resources/SystematicTheologyNotes';
import WestminsterConfession from './pages/Resources/WestminsterConfession';

import OurPeople from './pages/VisitUs/OurPeople';
import OurVision from './pages/VisitUs/OurVision';
import Parking from './pages/VisitUs/Parking';
import WhatWeBelieve from './pages/VisitUs/WhatWeBelieve';
import WorshipServices from './pages/VisitUs/WorshipServices';

import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import SupportUs from './pages/SupportUs';

class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/GrowthGroups" component={GrowthGroups}/>
          <Route exact path="/MensMinistry" component={MensMinistry} />
          <Route exact path="/QuarryYouth" component={QuarryYouth} />
          <Route exact path="/StreetEvangelism" component={StreetEvangelism} />
          <Route exact path="/WomensMinistry" component={WomensMinistry} />
          {/*<Route exact path="/YoungAdults" component={YoungAdults} />*/}

          <Route exact path="/Cornerpost" component={Cornerpost} />
          <Route exact path="/EngagedCouples" component={EngagedCouples} />
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />
          <Route exact path="/node/:nid" component={SermonPage} />
          <Route exact path="/node/:nid/:title" component={SermonPage} />
          <Route exact path="/SystematicTheologyNotes" component={SystematicTheologyNotes} />
          <Route exact path="/WestminsterConfession" component={WestminsterConfession} />

          <Route exact path="/OurPeople" component={OurPeople} />
          <Route exact path="/OurVision" component={OurVision} />
          <Route exact path="/Parking" component={Parking} />
          <Route exact path="/WhatWeBelieve" component={WhatWeBelieve} />
          <Route exact path="/WorshipServices" component={WorshipServices} />

          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/SupportUs" component={SupportUs} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
