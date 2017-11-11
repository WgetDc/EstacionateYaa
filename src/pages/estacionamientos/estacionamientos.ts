import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioEstacionamientos } from '../../servicios/servicio.estacionamientos';

/**
 * Generated class for the EstacionamientosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estacionamientos',
  templateUrl: 'estacionamientos.html',
})
export class EstacionamientosPage {
  estacionamientos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public servicioEstacionamientos: ServicioEstacionamientos) {
      this.estacionamientos = this.servicioEstacionamientos.getEstacionamientos();
     
       }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionamientosPage');
  }

  public goToPageDetalle(identificador){
    this.navCtrl.push('DetallePage', { id: identificador});
  }

  public goToPageCrear(){
    this.navCtrl.push('CrearPage');
  }

}
