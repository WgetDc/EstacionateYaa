import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstacionamientosPage } from './estacionamientos';

@NgModule({
  declarations: [
    EstacionamientosPage,
  ],
  imports: [
    IonicPageModule.forChild(EstacionamientosPage),
  ],
})
export class EstacionamientosPageModule {}
