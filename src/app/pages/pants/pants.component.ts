import { Component, ElementRef, HostListener } from '@angular/core';
import {JeanService} from 'src/app/core/service/jean/jean.service'

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent {

  public asideVisible: boolean = true;
  coloresDisponibles: string[] = [];
  jeanDataList: any;

  constructor(private jeanService: JeanService, private el:ElementRef){}

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

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const footerContainer = document.querySelector('.footer');

    // Asegúrate de que footerContainer no sea null antes de realizar operaciones
    if (footerContainer) {
      const footer = footerContainer.querySelector('app-footer');

      if (footer && footer.getBoundingClientRect().top <= window.innerHeight) {
        this.asideVisible = false;
      } else {
        this.asideVisible = true;
      }
    }
  }

}
