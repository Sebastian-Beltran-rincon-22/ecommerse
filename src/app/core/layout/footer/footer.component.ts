import { Component } from '@angular/core';
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
  visibleImages: number = 3; // Ajusta según tu necesidad

  constructor(private jeanService: JeanService) {}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % (this.jeanDataList.length - this.visibleImages + 1);
    this.updateVisibleJeanData();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.jeanDataList.length) % (this.jeanDataList.length - this.visibleImages + 1);
    this.updateVisibleJeanData();
  }

  updateVisibleJeanData() {
    this.visibleJeanDataList = this.jeanDataList.slice(this.currentIndex, this.currentIndex + this.visibleImages);
  }

  ngOnInit(): void {
    this.jeanService.getJeanData().subscribe(dataList => {
      this.jeanDataList = dataList;
      this.updateVisibleJeanData();
    });
  }
}

