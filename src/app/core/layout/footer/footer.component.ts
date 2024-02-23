import { Component, HostListener } from '@angular/core';
import { JeanService } from '../../service/jean/jean.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentIndex: number = 0;
  jeanDataList: any;
  visibleJeanDataList: any;
  visibleImages: number = 3 ; // Ajusta según tu necesidad
  transformStyle: any;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustVisibleImages();
  }

  constructor(private jeanService: JeanService) {}

  nextSlide() {
    if (this.currentIndex < this.jeanDataList.length - this.visibleImages) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleJeanData();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.jeanDataList.length - this.visibleImages;
    }
    this.updateVisibleJeanData();
  }

  updateVisibleJeanData() {
    this.visibleJeanDataList = this.jeanDataList.slice(this.currentIndex, this.currentIndex + this.visibleImages);
  }

  updateTransformStyle() {
    // Calcula el valor de transform para una transición suave
    const transformValue = -this.currentIndex * (100 / this.visibleImages) + '%';
    this.transformStyle = { 'transform': 'translateX(' + transformValue + ')' };
  }

  adjustVisibleImages() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.visibleImages = 1; // Muestra una tarjeta a la vez en pantallas pequeñas
    } else if (windowWidth < 1024) {
      this.visibleImages = 2; // Muestra dos tarjetas en pantallas medianas
    } else {
      this.visibleImages = 3; // Muestra tres tarjetas en pantallas más grandes
    }

    // Asegúrate de que el índice y los datos visibles se actualicen
    this.currentIndex = 0;
    this.updateVisibleJeanData();
  }



  ngOnInit(): void {
    this.jeanService.getJeanData().subscribe(dataList => {
      this.jeanDataList = dataList;
      this.updateVisibleJeanData();
    });
  }
}

