import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div class="glyphicon glyphicon-map-marker" style={{ transform: 'translate(-50%, -50%)' }}>
        {text}
    </div>
);

class LocationMap extends Component {

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBO0Bt5jGSF9OSTkqYveC5XR1dcQ2JMX6I" }}
                    defaultCenter={this.props.data.map.center}
                    defaultZoom={this.props.data.map.zoom}
                >
                    <AnyReactComponent
                        lat={this.props.data.map.center.lat}
                        lng={this.props.data.map.center.lng}
                        text={this.props.data.map.text}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default LocationMap;