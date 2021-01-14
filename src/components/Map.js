import React from 'react';
import listsContainer from '../containers/listsContainer';
import locationsContainer from '../containers/locationsContainer';
import commentsContainer from '../containers/commentsContainer';
import { GoogleMap } from 'react-google-maps'

const Map = () => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 29.760427, lng: -95.369804}}> 
        </GoogleMap>
    );
}

export default Map;