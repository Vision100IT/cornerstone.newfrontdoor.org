/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popup from 'reactjs-popup';


class SiteNotification extends Component {
    constructor(props) {
        super(props);
        console.log(props);
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

                                <div className="header"> <h3>Cornerstone Church is relocating...</h3> </div>

                                <h5 className="text-center">
                                    Sunday 12th May will be our last Service at 45 Melville St. <br /><br />
                                    From Sunday 19th May we will be meeting at <a href="https://goo.gl/maps/PAtkKDuPaQYGRUj7A" target="blank" rel="noopener noreferrer">Hellenic House, 67 Federal St, North Hobart</a>.

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
