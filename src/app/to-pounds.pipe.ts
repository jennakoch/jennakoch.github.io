import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPounds'
})
export class ToPoundsPipe implements PipeTransform {

  transform(value: number): number {
    const hectograms = value;
    const poundsWeight = Math.floor(hectograms * .22046226);
    return poundsWeight;
  }

}
