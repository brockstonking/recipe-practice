import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import SimpleMap from './../components/map';

class LatandLong extends Component {

    constructor(props){
        super(props);

        this.state = {
            lat: null,
            lng: null,
            latAndLongLoaded: false,
            stored: false
        }
    }

    componentDidMount = () => {

        setInterval( () => {
            if (!this.props.coords) {
                this.setState({
                    latAndLongLoaded: false,
                    stored: false
                })
            } else if (!this.state.latAndLongLoaded){
                 this.setState({
                    lat: this.props.coords.latitude,
                    lng: this.props.coords.longitude,
                    latAndLongLoaded: true,
                    stored: true
                })
            }
            if (this.state.stored){
                console.log(`Latitude: ${ this.props.coords.latitude }`)
                console.log(`Longitude: ${ this.props.coords.longitude }`)
                this.setState({
                    stored: null
                })
            }
        }, 500)
    }

    

     render() {

        return (
            <div style={{ height: '100vh', width: '100%' }}>
            <SimpleMap center={ {lat: this.state.lat, lng: this.state.lng} } lat={this.state.lat} lng={ this.state.lng } />
      </div>
        )
    }
}



export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(LatandLong);
