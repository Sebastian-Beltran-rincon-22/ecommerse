import { Component } from '@angular/core';
import { MyprofileService } from 'src/app/core/service/myprofile/myprofile.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  datosPerfil$ = this.myProfileService.datosPerfil$;
  constructor(private myProfileService:MyprofileService) {}

  ngOnInit() {
    // Obtener y actualizar datos del perfil desde el servicio
    const datosPerfil = {
      correo: 'ejemplodecorreo@gmail.com',
      celular: '3222222222',
      identificacion: '212312323'
    };
    this.myProfileService.actualizarDatosPerfil(datosPerfil);
  }

  openModal(){

  }
  closeModal(){
    
  }
}
