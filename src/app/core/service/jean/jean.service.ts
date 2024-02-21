import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeanService {

  getJeanData(): Observable<any[]> {
    // Simula la recepción de datos del backend
    const mockData:any[] = [
      {
      imagenDelantera: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/06/0fcb33be-698d-4042-8b0a-4e18ac51cc78.jpg',
      imagenTrasera: 'https://cdnimg.emmiol.com/E/202204/img_original-CCD0418BO-2705456100.jpg',
      nombreJean: 'Jean ancho casual',
      precio: 39.99,
      talla: 'M',
      color: 'azul',
    },
    {
      imagenDelantera: 'https://cdnimg.emmiol.com/E/202212/img_original-CCL0344BO-2902401125.jpg',
      imagenTrasera: 'https://cdnimg.emmiol.com/E/CDD0317BO/8aa3aa94f4ff7e8aa40c6feb43275d63.jpg',
      nombreJean: 'Jean ancho casual estilo 90s',
      precio: 50.99,
      talla: 'L',
      color: 'negro',
    },

    {
      imagenDelantera: 'https://www.modarm.com/medias/000005000000842981-1200x1200-0.jpg?context=bWFzdGVyfGltYWdlc3wzMjM1Nzd8aW1hZ2UvanBlZ3xhRGRqTDJneE55OHhNRE13TVRJNE9UQTNNRFl5TWk4d01EQXdNRFV3TURBd01EQTROREk1T0RFdE1USXdNSGd4TWpBd1h6QXVhbkJufDM3NzYxOWUzMGNiNmM1MTY1NmQwYjk3ODllNDk3N2RmYzY2NTI3Mjc0NjFiNDU2OTQ1NWE3OTJhNDViYjE1Y2I',
      imagenTrasera: 'https://media.revistagq.com/photos/5ca5ef53c4b7fb7894ba9109/master/pass/levis_vaqueros_gq_4522.jpg',
      nombreJean: 'Jean casual',
      precio: 20.99,
      talla: 'S',
      color: 'gris',
    },

    {
      imagenDelantera: 'https://www.modarm.com/medias/000005000000842981-1200x1200-0.jpg?context=bWFzdGVyfGltYWdlc3wzMjM1Nzd8aW1hZ2UvanBlZ3xhRGRqTDJneE55OHhNRE13TVRJNE9UQTNNRFl5TWk4d01EQXdNRFV3TURBd01EQTROREk1T0RFdE1USXdNSGd4TWpBd1h6QXVhbkJufDM3NzYxOWUzMGNiNmM1MTY1NmQwYjk3ODllNDk3N2RmYzY2NTI3Mjc0NjFiNDU2OTQ1NWE3OTJhNDViYjE1Y2I',
      imagenTrasera: 'https://media.revistagq.com/photos/5ca5ef53c4b7fb7894ba9109/master/pass/levis_vaqueros_gq_4522.jpg',
      nombreJean: 'Jean casual',
      precio: 20.99,
      talla: 'S',
      color: 'gris',
    },

    {
      imagenDelantera: 'https://img.ws.mms.shopee.com.co/fe313ababaa08b3c7615d33fd198ff75',
      imagenTrasera: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8cd294ac6275a3bc7eb8d06b81e5e362.jpg?imageView2/2/w/500/q/60/format/webp',
      nombreJean: 'Jean unisex',
      precio: 18.50,
      talla: 'Xl',
      color: 'azul',
    },
    {
      imagenDelantera: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/06/0fcb33be-698d-4042-8b0a-4e18ac51cc78.jpg',
      imagenTrasera: 'https://cdnimg.emmiol.com/E/202204/img_original-CCD0418BO-2705456100.jpg',
      nombreJean: 'Jean ancho casual',
      precio: 39.99,
      talla: 'M',
      color: 'azul',
    },

    ];

    return of(mockData);
  }

}
