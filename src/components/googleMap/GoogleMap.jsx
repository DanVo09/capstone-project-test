import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Loader } from '@googlemaps/js-api-loader';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';


const GOOGLEMAP_API_KEY = process.env.REACT_APP_GOOGLEMAP_API_KEY
const GOOGLEMAP_ID = process.env.REACT_APP_GOOGLEMAP_ID

const containerStyle = {
    width: '100%',
    height: '100%'
  };
 
const center = {
    lat: 53.56851332068016,
    lng: -113.49961975803355
  };

  const apiOptions = {
    "id": 'google-map-script',
    "version": "beta",
    "googleMapsApiKey": GOOGLEMAP_API_KEY,
  };


  const mapOptions = {
    "tilt": 0,
    "heading": 0,
    "zoom": 18,
    "mapId": GOOGLEMAP_ID,
    keyboardShortcuts: false,
    "center": { lat: 53.56851332068016, lng: -113.49961975803355 }
}



function GoogleMapLoader() {

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      mapIds: [GOOGLEMAP_ID],
      googleMapsApiKey: GOOGLEMAP_API_KEY,
      version: "beta"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
     
      const apiLoader = new Loader(apiOptions);
      apiLoader.load();
      initWebGLOverlayView(map);
      setMap(map)
    }, [])

    function initWebGLOverlayView (map) {
        const webglOverlayView = new window.google.maps.WebGLOverlayView();
        let scene, renderer, camera, loader;

        // WebGLOverlayView code goes here
      
        webglOverlayView.onAdd = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera();
            const ambientLight = new THREE.AmbientLight( 0xffffff, 0.75 );
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.25);
            directionalLight.position.set(0.5, -1, 0.5);
            scene.add(directionalLight);
      
            loader = new GLTFLoader();
            const source = process.env.PUBLIC_URL + `/assets/models/pin.glb`;
            loader.load(
              source,
              gltf => {
                gltf.scene.scale.set(25,25,25);
                gltf.scene.rotation.x = 180 * Math.PI/180;
                gltf.scene.position.z = -40
                scene.add(gltf.scene);
              }
            );
        };
      
        webglOverlayView.onContextRestored = ({gl}) => {
            renderer = new THREE.WebGLRenderer({
            canvas: gl.canvas,
            context: gl,
            ...gl.getContextAttributes(),
          });
      
          renderer.autoClear = false;
      
          loader.manager.onLoad = () => {        
            renderer.setAnimationLoop(() => {
              map.moveCamera({
                "tilt": mapOptions.tilt,
                "heading": mapOptions.heading,
                "zoom": mapOptions.zoom
              });            
              
              // rotate the map 360 degrees 
              if (mapOptions.tilt < 67.5) {
                mapOptions.tilt += 0.5
              } else if (mapOptions.heading <= 360) {
                mapOptions.heading += 0.2;
              } else {
                renderer.setAnimationLoop(null)
              }
            });        
          }
        };
      
        webglOverlayView.onDraw = ({gl, transformer}) => {
          const matrix = transformer.fromLatLngAltitude({
              lat: mapOptions.center.lat,
              lng: mapOptions.center.lng,
              altitude: 120,
          });
        camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix);
          
          webglOverlayView.requestRedraw();
          renderer.render(scene, camera);
          renderer.resetState();
        };
      
        webglOverlayView.setMap(map)
      }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
   ) : <></>
}


export default React.memo(GoogleMapLoader)