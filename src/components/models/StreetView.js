import React, { Component } from 'react';
import ReactStreetview from 'react-streetview'


class StreetView extends Component {

    render() {
        // see https://developers.google.com/maps/documentation/javascript
        const googleMapsApiKey = 'AIzaSyAeAsMVFuZGVl__GUmbfH8-XyjIjWB_rGQ';

        // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
        const streetViewPanoramaOptions = {
            position: { lat: -42.8711476, lng: 147.315940 },
            pov: { heading: 330, pitch: 0 },
            zoom: 1.6,
            disableDefaultUI: true,
            clickToGo: false
        }
        return (
            <div style={{
                width: '700px',
                height: '400px',
                backgroundColor: '#eeeeee'
            }} className="street-view-container">
                <ReactStreetview
                    apiKey={googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div>
        );
    }
}

export default StreetView;
