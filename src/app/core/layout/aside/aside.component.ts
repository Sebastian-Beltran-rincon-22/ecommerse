import { Component } from '@angular/core';
import { JeanService } from '../../service/jean/jean.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  coloresDisponibles: string[] = [];

  constructor(private jeanService:JeanService) {}

  ngOnInit(): void {
    this.jeanService.coloresDisponibles$.subscribe(colores => {
      this.coloresDisponibles = colores;
    });
  }

  getBackgroundColorClass(color: string): string {
    return `bg-${color}-500`;
  }

}
