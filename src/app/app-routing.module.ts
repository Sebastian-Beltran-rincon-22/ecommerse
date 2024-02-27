import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ViewComponent } from './pages/view/view.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AccountComponent } from './pages/profile/account/account.component';
import { MyprofileComponent } from './pages/profile/myprofile/myprofile.component';
import { AddressesComponent } from './pages/profile/addresses/addresses.component';
import { OrdersComponent } from './pages/profile/orders/orders.component';

const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'catalogo/pant',component: PantsComponent},
  {path:'view/rutadinamica',component: ViewComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'admin',component: DashboardComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'account',component:AccountComponent,children:[
    {path:'myprofile',component:MyprofileComponent,outlet: 'myOutlet'},
    {path:'adress',component:AddressesComponent,outlet:'adreOutlet'},
    {path:'orders',component:OrdersComponent, outlet:'dersOutlet'}
  ]},

  //pages not found
  {path:'**',component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
