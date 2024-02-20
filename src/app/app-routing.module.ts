import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PantsComponent } from './pages/pants/pants.component';

const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'catalogo/pant',component: PantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
