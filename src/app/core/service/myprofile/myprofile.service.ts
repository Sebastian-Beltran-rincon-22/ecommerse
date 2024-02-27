import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor() { }

  private datosPerfilSubject = new BehaviorSubject<any>(null);
  datosPerfil$ = this.datosPerfilSubject.asObservable();

  actualizarDatosPerfil(datos: any) {
    console.log('Actualizando datos del perfil:', datos);
    this.datosPerfilSubject.next(datos);
  }

}
