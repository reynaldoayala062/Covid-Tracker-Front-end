import React from 'react';
import listsContainer from '../containers/listsContainer';
import locationsContainer from '../containers/locationsContainer';
import commentsContainer from '../containers/commentsContainer';
import { withGoogleMap, withScriptjs } from 'react-google-maps'
import Map from '../components/Map'

const ContainerMap = () => {
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);


  const panTo = React.useCallback(({lat, lng}) =>{
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(14)
  }, []);

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
    )
}

export default ContainerMap;