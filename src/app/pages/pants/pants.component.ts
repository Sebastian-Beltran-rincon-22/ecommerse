import { Component } from '@angular/core';
import {JeanService} from 'src/app/core/service/jean/jean.service'

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent {

  jeanDataList: any;

  constructor(private jeanService: JeanService){}

  ngOnInit(): void {
    this.jeanService.getJeanData().subscribe(dataList => {
      this.jeanDataList = dataList;
    });
  }

}
