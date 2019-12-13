/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popup from 'reactjs-popup';


class SiteNotification extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            this.props.showNotification ? (<section className="site-notification">
                <Popup modal defaultOpen={true} closeOnDocumentClick={false} onClose={() => this.props.onClose()}>
                    {close => (
                        <div className="notification-popup">
                            <span>
                                <a className="close" onClick={close}>
                                    Close &times;
        </a>
                                {this.props.content}

                                <div className="header"><h3>Service Information</h3></div>

                                <h4 className="text-center">Sunday 22nd December</h4>

                                <h5 className="text-center">
                                    <p>Cornerstone Church Service will be held in the Calvin Primary School Multipurpose Hall (<a href="https://goo.gl/maps/PLML6hB21KLJMs8f6" target="_blank" rel="noreferrer noopener">35 Maranoa Rd, Kingston</a>)</p>

                                    <p>Parking available in Denison Street and in the Woolworths shopping centre</p>

                                    <p>Service commences at 10am and will be followed by morning tea</p>

                                    <p>Preacher: Derrick Clack (Psalm 90)</p>

                                    <p><em>Note: There will be no Crèche or Cornerpebble at this service</em></p>



                                </h5>




                            </span>
                        </div>
                    )}
                </Popup >
            </section >) : ''
        );
    }
}

export default SiteNotification;
