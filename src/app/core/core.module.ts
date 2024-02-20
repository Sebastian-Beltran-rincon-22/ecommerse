import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './libs/modal/modal.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [
    ModalComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    AsideComponent
  ]
})
export class CoreModule { }
