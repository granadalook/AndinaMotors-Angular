import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auto } from '../../../auto.model';

@Injectable({
  providedIn: 'root',
})
export class AutosService {
  autos: Array<Auto> = [
    {
      id: 1,
      marca: 'maclaren',
      fundador:'Ron Dennis',
      sede: 'Woking, Inglaterra',
      fundacion: 1985,
      logo: '../../../../../assets/icons/logo--mclaren.svg',
      url: 'https://es.wikipedia.org/wiki/McLaren',
    },
    {
      id: 2,
      marca: 'nissan',
      fundador:'Kenjiro Den',
      sede: 'Yokohama, Japón',
      fundacion: 1933,
      logo: '../../../../../assets/icons/logo--nissan.svg',
      url: 'https://es.wikipedia.org/wiki/Nissan',
    },
    {
      id: 3,
      marca: 'chevrolet',
      fundador:'Louis Chevrolet',
      sede: 'Detroit, Míchigan, Estados Unidos',
      fundacion:1911,
      logo: '../../../../../assets/icons/logo--chevrolet.svg',
      url: 'https://es.wikipedia.org/wiki/Chevrolet',
    },
    {
      id: 4,
      marca: 'ford',
      fundador:'Henry Ford',
      sede: '	Dearborn ,Míchigan, Estados Unidos',
      fundacion:  1903,
      logo: '../../../../../assets/icons/logo--ford.svg',
      url: 'https://es.wikipedia.org/wiki/Ford_Motor_Company',
    },
    {
      id: 5,
      marca: 'lamborguini',
      fundador:'	Ferruccio Lamborghini',
      sede: 'Sant Agata Bolognese , Italia',
      fundacion: 	1963,
      logo: '../../../../../assets/icons/logo--lamborghini.svg',
      url: 'https://es.wikipedia.org/wiki/Lamborghini',
    },
    {
      id: 6,
      marca: 'land rover',
      fundador:'	British Leyland',
      sede: 'Coventry West Midlands, Inglaterra​',
      fundacion:	1949,
      logo: '../../../../../assets/icons/logo--land-rover.svg',
      url: 'https://es.wikipedia.org/wiki/Land_Rover',
    },
    {
      id: 7,
      marca: 'maserati',
      fundador:'	Alfieri Maserati',
      sede: 'Módena, Italia',
      fundacion: 1914,
      logo: '../../../../../assets/icons/logo--maserati.svg',
      url: 'https://es.wikipedia.org/wiki/Maserati',
    },
    {
      id: 8,
      marca: 'renault',
      fundador:'	Louis Renault, Marcel Renault',
      sede: 'Boulogne-Billancourt, Francia',
      fundacion: 1898,
      logo: '../../../../../assets/icons/logo--renault.svg',
      url: 'https://es.wikipedia.org/wiki/Renault',
    },
    {
      id: 9,
      marca: 'toyota',
      fundador:'	Kiichiro Toyoda',
      sede: 'Toyota, Aichi, Japón',
      fundacion: 	1933,
      logo: '../../../../../assets/icons/logo--toyota.svg',
      url: 'https://es.wikipedia.org/wiki/Toyota',
    },
    {
      id: 10,
      marca: 'ferrari',
      fundador:'	Enzo Ferrari',
      sede: '	Módena-Maranello, Emilia-Romaña,  Italia',
      fundacion: 1939,
      logo: '../../../../../assets/icons/logo--ferrari.svg',
      url: 'https://es.wikipedia.org/wiki/Ferrari',
    },
    {
      id: 11,
      marca: 'mazda',
      fundador:'	Jujiro Matsuda',
      sede: 'Hiroshima, Japón',
      fundacion: 1920,
      logo: '../../../../../assets/icons/logo--mazda.svg',
      url: 'https://es.wikipedia.org/wiki/Mazda',
    },
    {
      id: 12,
      marca: 'jaguar',
      fundador:'William Lyons',
      sede: 'Coventry, Reino Unido',
      fundacion: 	1922,
      logo: '../../../../../assets/icons/logo--jaguar.svg',
      url: 'https://es.wikipedia.org/wiki/Jaguar_Cars',
    },
    {
      id: 13,
      marca: 'alfa romeo',
      fundador:'	Alexandre Darracq, Nicola Romeo',
      sede: '	Turín,  Italia​',
      fundacion: 1910,
      logo: '../../../../../assets/icons/logo--alfaromeo.svg',
      url: 'https://es.wikipedia.org/wiki/Alfa_Romeo',
    },
    {
      id: 14,
      marca: 'aston martin',
      fundador:'	Robert Bamford, Lionel Martin',
      sede: '	Warwickshire, Reino Unido',
      fundacion: 	1913,
      logo:'../../../../../assets/icons/logo--astonmartin.svg',
      url: 'https://es.wikipedia.org/wiki/Aston_Martin',
    },
    {
      id: 15,
      marca: 'mercedes benz',
      fundador:'	Karl Benz',
      sede: ' Stuttgart, Alemania',
      fundacion: 1926 ,
      logo: '../../../../../assets/icons/logo--mercedesbenz.svg',
      url: 'https://es.wikipedia.org/wiki/Mercedes-Benz',
    },
    {
      id: 16,
      marca: 'audi',
      fundador:'August Horch',
      sede: 'Ingolstadt, Alemania',
      fundacion: 1909 ,
      logo: '../../../../../assets/icons/logo--audi.svg',
      url: 'https://es.wikipedia.org/wiki/Audi',
    },
    {
      id: 17,
      marca: 'bmw',
      fundador:'Camillo Castiglioni',
      sede: 'Múnich, Baviera, Alemania',
      fundacion: 1916 ,
      logo: '../../../../../assets/icons/logo--bmw.svg',
      url: 'https://es.wikipedia.org/wiki/BMW',
    },
  ];

  constructor() {}
  traer() {
    return this.autos;
  }

  Buscar(marca: string) {
    return this.autos.find((item) => marca.toUpperCase().trim() === item.marca.toUpperCase().trim());
  }
}
