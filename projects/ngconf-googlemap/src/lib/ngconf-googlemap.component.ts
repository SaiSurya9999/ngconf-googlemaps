import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var google: any;

@Component({
  selector: 'ngconf-googlemap',
  template: `<div id="map"> </div>`,
  styles: [
  ]
})
export class NgconfGooglemapComponent implements OnInit {

  @Input() API_KEY: any;
  // Default Settings
  @Input() options: options = {
    mapHeight: "500px",
    mapWidth: "100%",
    initialPointer: false,
    mode: "CLICK",
    lat: 28.5355,
    long: 77.3910
  };
  @Output() latlong: EventEmitter<any> = new EventEmitter();

  private marker: any = null;

  constructor() { }

  ngOnInit() {
    this.mapInit();
  }

  mapInit() {
    let link: any = `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY}`;
    const script = document.createElement(`script`);
    script.src = link;
    let that = this;
    document.getElementById('map').style.width = this.options.mapWidth;
    document.getElementById('map').style.height = this.options.mapHeight;

    script.onload = () => {
      console.log('Google Map Script Loaded :)');
      that.latlong.emit({ lat: this.options.lat, long: this.options.long });
      that.showMap();
    };
    script.onerror = () => {
      console.log('Google Map Script loading failed!');
    }
    // Dynamic Script Inject
    document.getElementsByTagName('head')[0].appendChild(script);

  }

  showMap() {
    var mapId = document.getElementById('map');

    const location = { lat: this.options.lat, lng: this.options.long };

    var options = {
      center: location,
      zoom: 8
    }

    const map = new google.maps.Map(mapId, options);

    if (this.options.initialPointer) {
      // Point Initial Location
      let position: any = new google.maps.LatLng(parseFloat(location.lat), parseFloat(location.lng));
      this.placeMarker(map, position)
    }


    if (this.options.mode === 'CLICK') {
      let that = this;
      google.maps.event.addListener(map, 'click', function (event) {
        let location: any = event.latLng;
        that.latlong.emit({
          lat: location.lat(),
          long: location.lng()
        });
        if (that.marker && that.marker.setMap) {
          // Removing previous marker
          that.marker.setMap(null);
        }
        that.placeMarker(map, event.latLng);
      });
    }

  }

  placeMarker(map, location) {
    this.marker = new google.maps.Marker({
      position: location,
      map: map
    });
    var infowindow = new google.maps.InfoWindow({
      content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
    });
    infowindow.open(map, this.marker);
  }

}

export interface options {
  mode: string,
  initialPointer: Boolean
  lat: any,
  long: any,
  mapHeight: string,
  mapWidth: string,
}

/*
 MODE: CLICK or VIEW
 Lat and Long is for initial preview
*/