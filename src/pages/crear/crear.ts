import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioEstacionamientos } from '../../servicios/servicio.estacionamientos';
/**
 * Generated class for the CrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html',
})
export class CrearPage {
  estacionamiento = { id: null, nombre: null, cupos: null, size: null, tarifa: null, tiempo: null, camara: null, dias: null, horario: null, img: null };
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioEstacionamientos: ServicioEstacionamientos) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPage');
  }

  public crearEstacionamiento(){
    this.estacionamiento.id = Date.now();
    this.servicioEstacionamientos.addEstacionamiento(this.estacionamiento);
    this.navCtrl.pop();
  }

}
