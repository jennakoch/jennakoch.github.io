import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInches'
})
export class ToInchesPipe implements PipeTransform {

  transform(value: number): number {
    const decimeters = value;
    const inchesHeight = Math.floor(decimeters * 3.94);
    
    return inchesHeight;
  }

}
