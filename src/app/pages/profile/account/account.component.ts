import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyprofileService } from 'src/app/core/service/myprofile/myprofile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  datosPerfil$ = this.myProfileService.datosPerfil$;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private myProfileService:MyprofileService){}


  verMiPerfil() {
    this.router.navigate([{ outlets: { adreOutlet: null, dersOutlet: null, myOutlet: ['myprofile'] } }], { relativeTo: this.activatedRoute });
  }

  direcciones() {
    this.router.navigate([{ outlets: { myOutlet: null, dersOutlet: null, adreOutlet: ['adress'] } }], { relativeTo: this.activatedRoute });
  }
  ordenes() {
    this.router.navigate([{ outlets: { myOutlet: null, adreOutlet: null, dersOutlet: ['orders'] } }], { relativeTo: this.activatedRoute });
  }

}
