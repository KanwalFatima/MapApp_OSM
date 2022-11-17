import React,{useEffect} from 'react';
import { MapContainer,Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon= L.icon(
  {
    iconUrl: './placeholder',
    iconSize: [50, 50]
  }
);

const position = [51.505, -0.09]

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);

  return null;
}

function Maps(props) {
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon]; 
  return(
    <MapContainer 
    center={position}
    zoom={0}
    style={{width:'100%', height:'100%'}}>
      
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=fMlmYhHlXBukK5cbz0y9"
    />
    {
      selectPosition &&(
      <Marker position={locationSelection} icon={icon}>
      <Popup>
        Islamabad, Pakistam. <br /> Easily customizable.
      </Popup>
    </Marker>

      )
    }
     <ResetCenterView selectPosition={selectPosition} />
  </MapContainer>
  );
}

export default Maps
