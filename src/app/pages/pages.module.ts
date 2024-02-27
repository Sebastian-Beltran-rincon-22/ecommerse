import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PantsComponent } from './pants/pants.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { AddressesComponent } from './profile/addresses/addresses.component';
import { OrdersComponent } from './profile/orders/orders.component';
import { AccountComponent } from './profile/account/account.component';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PantsComponent,
    ViewComponent,
    RegisterComponent,
    DashboardComponent,
    ResetPasswordComponent,
    MyprofileComponent,
    AddressesComponent,
    OrdersComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
