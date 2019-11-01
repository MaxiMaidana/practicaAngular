import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Maxi',
      especialidad: 'ninguna',
      descripcion: 'dasdas fasdfasd asdfasgag agrgg afragrsasfa asfwata adasd asd asd as gasfg fg ga gagrgfgdg rgardfas'
    },
    {
      nombre: 'Milo',
      especialidad: 'guitarra',
      descripcion: 'dasdas fasdfasd asdfasgag agrgg afragrsasfa asfwata adasd asd asd as gasfg fg ga gagrgfgdg rgardfas'
    }
  ]

  constructor() {
    console.log('funcionando servicio')
   }

   obtenerEquipo(){
     return this.equipo;
   }
}
