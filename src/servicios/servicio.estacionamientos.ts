import {Injectable} from '@angular/core';

@Injectable()

export class ServicioEstacionamientos{
    estacionamientos = [
        {id:1 , nombre:"SBT"},
        {id:2 , nombre:"Mall Costanera"}
    ];

    public getEstacionamientos(){
        return this.estacionamientos;
    }
}