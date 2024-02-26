import { Component } from '@angular/core';
import { JeanService } from 'src/app/core/service/jean/jean.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  nuevoColor: string = '';

  constructor(private jeanService:JeanService){}

  agregarColor(): void {
    this.jeanService.agregarColor(this.nuevoColor);
    this.nuevoColor = '';
  }

}
