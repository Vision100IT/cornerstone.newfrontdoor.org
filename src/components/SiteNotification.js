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

                                    <p>God willing, we will continue to worship together each Sunday morning, but rather than physically gathering at the Hellenic Hall, our service will be broadcast on YouTube.</p>

                                    <p>Whether you arrange to get together with a small group in someone’s home, or choose to stay at home with just your own household, please tune in at 10am each Sunday and let’s continue to worship together!</p>

                                    <p>You will find our YouTube broadcasts <a href="https://www.youtube.com/channel/UCF-sudt_zfl2Ni8eR9ayVHQ/playlists">here</a>.</p>
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
