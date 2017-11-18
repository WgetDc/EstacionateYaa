import {Injectable} from '@angular/core';

@Injectable()

export class ServicioEstacionamientos{
    estacionamientos = [
        { id: 1, nombre: "SBT", cupos: 300, size: "2x3", tarifa: 300, tiempo: "Media hora", camara: "Sí", dias: "Lunes a Domingo", horario: "08:00 - 19:00", img:"http://webportal.mercadopublico.cl/ServicioDirectorio/Logo.aspx?id=14268", },
        { id: 2, nombre: "Mall Costanera", cupos: 1000, size: "3x3", tarifa: 600, tiempo: "Media hora", camara: "No", dias: "Lunes a Domingo", horario: "08:00 - 24:00", img: "https://static0.tiendeo.cl/galeria/centroscomerciales/mall-paseo-costanera/mall-paseo-costanera.jpg", } ,
        { id: 3, nombre: "Inacap", cupos: 100, size: "2x3", tarifa: 0, tiempo: "Indefinido", camara: "Sí", dias: "Lunes a Sabado", horario: "07:00 - 24:00", img: "http://www.eechile.cl/eficiencia-energetica/wp-content/uploads/Inacap-Puerto-Montt.jpg", }
    ];

    public getEstacionamientos(){
        return this.estacionamientos;
    }

    public getEstacionamiento(id) {
        return this.estacionamientos.filter(function (e, i) {
            return e.id == id
        })[0] || { id: null, nombre: null, cupos: null, size: null, tarifa: null, tiempo: null, camara: null, dias: null, horario: null, img: null };
    }

    public addEstacionamiento(estacionamiento){
        this.estacionamientos.push(estacionamiento);
    }

    public deleteEstacionamiento(estacionamiento){
        let index = this.estacionamientos.indexOf(estacionamiento);
        this.estacionamientos.splice(index,1);
    }

    public editEstacionamiento(estacionamiento){
        let index = this.estacionamientos.indexOf(estacionamiento);
        this.estacionamientos[index] = estacionamiento;
    }
}