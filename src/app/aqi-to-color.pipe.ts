import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aqiToColor'
})
export class AqiToColorPipe implements PipeTransform {

  transform(aqi: number | string): string {
    aqi = Number(aqi);
    if (aqi >= 0 && aqi <= 50) {
      return 'rgb(82, 185, 71)';
    } else if (aqi <= 100) {
      return 'rgb(243, 246, 25)';
    } else if (aqi <= 150) {
      return 'rgb(245, 126, 32)';
    } else if (aqi <= 200) {
      return 'rgb(237, 29, 36)';
    } else if (aqi <= 300) {
      return 'rgb(126, 43, 125)';
    } else if (aqi <= 500) {
      return 'rgb(72, 13, 39)';
    }
  }

}
