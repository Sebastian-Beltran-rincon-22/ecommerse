import { Component } from '@angular/core';
import {JeanService} from 'src/app/core/service/jean/jean.service'

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent {

  coloresDisponibles: string[] = [];
  jeanDataList: any;

  constructor(private jeanService: JeanService){}

  ngOnInit(): void {
    this.jeanService.coloresDisponibles$.subscribe(colores => {
      this.coloresDisponibles = colores;
    });

    this.jeanService.getJeanData().subscribe(dataList => {
      this.jeanDataList = dataList;
    });
  }

  getBackgroundColorClass(color: string): string {
    return `bg-${color}-500`;
  }

}
