import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ViewComponent } from './pages/view/view.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'catalogo/pant',component: PantsComponent},
  {path:'view/rutadinamica',component: ViewComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},


  //pages not found
  {path:'**',component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
