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

                                <div className="header"> <h3>Service Information</h3> </div>

                                <h5 className="text-center">
                                    Cornerstone’s Church Service on Sunday 9th June will be held at 10am at<br />

                                    Blue Lagoon Camp, <a href="https://goo.gl/maps/85RniKV8QUd1rxt89" target="blank" rel="noopener noreferrer">41-55 Bally Park Rd, Dodges Ferry</a>.

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
