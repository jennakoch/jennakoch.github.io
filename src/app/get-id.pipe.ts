import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getId'
})
export class GetIdPipe implements PipeTransform {

  transform(value: string): string {
    var incomingUrl = value;

    var url = "https://pokeapi.co/api/v2/pokemon/";
    var number = incomingUrl.substr(incomingUrl.indexOf(url) + url.length);
    var almostTheNumber= number.charAt(0).toUpperCase() + number.substr(1);
    return almostTheNumber.replace(/\/$/, ""); 
  }

}
