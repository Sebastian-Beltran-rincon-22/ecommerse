import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PantsComponent } from './pants/pants.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PantsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
