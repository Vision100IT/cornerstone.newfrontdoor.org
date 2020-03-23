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

                                <div className="header"><h3>Welcome to Cornerstone Hobart</h3></div>

                                <h5 className="text-center">
                                    <p>At Cornerstone, we want to remain socially and spiritually connected, however we do recognise the prudence of physical distancing and the need to flatten the curve of the spread of COVID-19.</p>

                                    <p>We are no longer able to physically gather together, but please tune in to our YouTube channel at 10am each Sunday and let’s continue to worship together.</p>

                                    <p>You will find our YouTube broadcasts <a href="https://www.youtube.com/channel/UCF-sudt_zfl2Ni8eR9ayVHQ">here</a>.</p>
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
