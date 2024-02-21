import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'catalogo/pant',component: PantsComponent},
  {path:'view/rutadinamica',component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
