import React, { Component } from "react";
import { Map, Marker, Popup, FeatureGroup, LayersControl } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { EditControl } from "react-leaflet-draw";
const { BaseLayer } = LayersControl;

export default class SimpleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
      marker: [51.505, -0.09]
    };
  }

  terrain = "TERRAIN";
  key = "AIzaSyC0QH9aiCXuuRjJe4k5lzAM2bYl-MUhiPk";

  removeEverything = e => {
    console.log(e);
    const { lat, lng } = e.layer._latlng;
    this.setState({ marker: [lat, lng] });
    const { edit } = this.refs;
    var layerContainer = edit.leafletElement.options.edit.featureGroup;
    const layers = layerContainer._layers;
    const layer_ids = Object.keys(layers);
    layer_ids.splice(0, 1);
    layer_ids.forEach(id => {
      const layer = layers[id];
      layerContainer.removeLayer(layer);
    });
  };

 

  handleOnZoomed = e => {
    this.setState({ zoom: e.target._zoom });
  };

  render() {
    // const position = [this.state.lat, this.state.lng];
    return (
      <>
        
        <Map
          center={this.state.marker}
          zoom={this.state.zoom}
          onzoomend={this.handleOnZoomed}
        >
          <Marker
            position={this.state.marker}
            // defaultMarker={{ defaultMarker: true }}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {/* <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
          {/* <FeatureGroup>
            <EditControl
              ref="edit"
              position="topright"
              onCreated={this.removeEverything}
              draw={{
                rectangle: false
              }}
            />
          </FeatureGroup> */}
          <ReactLeafletGoogleLayer
            googleMapsLoaderConf={{ KEY: this.key }}
            type={"satellite"}
          />
        </Map>
      </>
    );
  }
}
