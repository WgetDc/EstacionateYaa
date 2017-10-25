import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioEstacionamientos } from '../../servicios/servicio.estacionamientos';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  id = null;
  estacionamiento = { id: null, nombre: null, cupos: null, size: null, tarifa: null, tiempo: null, camara: null, dias: null, horario: null, img: null }
  constructor(public servicioEstacionamientos: ServicioEstacionamientos, public navCtrl: NavController, public navParams: NavParams) {
  this.id = this.navParams.get('id');
  this.estacionamiento = this.servicioEstacionamientos.getEstacionamiento(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
