import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PantsComponent } from './pants/pants.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PantsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule
  ]
})
export class PagesModule { }
