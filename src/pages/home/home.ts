import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
map:any;
constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

ionViewDidLoad() {
  this.getPosition();
}

getPosition(): any {
  this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadMap(response);
    })
    .catch(error => {
      console.log(error);
    })
}

loadMap(position: Geoposition) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude, longitude);

  // create a new map by passing HTMLElement
  let mapEle: HTMLElement = document.getElementById('map');

  // create LatLng object
  let myLatLng = { lat: latitude, lng: longitude };
  let positionPark = { lat: -41.465119, lng: -72.939230 };
  // create map
  this.map = new google.maps.Map(mapEle, {
    center: myLatLng,
    zoom: 4
  });

  google.maps.event.addListenerOnce(this.map, 'idle', () => {
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello World!'
    });

    let parking = new google.maps.Marker({
      position: positionPark,
      map: this.map,
      title: 'Hello World!',
      icon: 'https://d30y9cdsu7xlg0.cloudfront.net/png/39818-200.png'
    });
    mapEle.classList.add('show-map');
  });
}

}
