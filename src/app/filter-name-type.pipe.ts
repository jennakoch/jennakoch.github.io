import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameType'
})
export class FilterNameTypePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toString().toLowerCase();
    return items.filter( items => {
      return items.pokemon.name.toLowerCase().includes(searchText);
    });
   } 

}
