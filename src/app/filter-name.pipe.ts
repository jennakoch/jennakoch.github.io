import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername'
})
export class FilterNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toString().toLowerCase();
    return items.filter( items => {
      return items.name.toLowerCase().includes(searchText);
    });
   } 

}
