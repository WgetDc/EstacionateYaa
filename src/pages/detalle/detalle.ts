import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioEstacionamientos } from '../../servicios/servicio.estacionamientos';
import { ToastController } from 'ionic-angular';
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
  editar = false;
  show = false;
  estacionamiento = { id: null, nombre: null, cupos: null, size: null, tarifa: null, tiempo: null, camara: null, dias: null, horario: null, img: null }
  constructor(public servicioEstacionamientos: ServicioEstacionamientos, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  this.id = this.navParams.get('id');
  this.estacionamiento = this.servicioEstacionamientos.getEstacionamiento(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  mostrar(){
      if(this.show == false){
      this.show = true;
    }
    else{
      this.show = false;
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Gerenando solicitud de reserva',
      duration: 3000
    });
    toast.present();
  }

  public eliminarEstacionamiento(){
    this.servicioEstacionamientos.deleteEstacionamiento(this.estacionamiento);
    this.navCtrl.pop();
  }

  public editarEstacionamiento(){
    this.servicioEstacionamientos.editEstacionamiento(this.estacionamiento);
    this.editar = false;
  }

  public enableEditar(){
    this.editar = true;
  }

}
