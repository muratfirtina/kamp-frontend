import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//rate i yazmamızın sebebi vergi oranı ratei yani
  transform(value: number, rate:number): number {
    return value + (value*rate/100);
  }

}
