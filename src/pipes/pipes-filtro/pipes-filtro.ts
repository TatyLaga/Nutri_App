import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PipesFiltroPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pipesFiltro',
})
export class PipesFiltroPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(arreglo: any[], texto: string,
    columna:string): any[] {

    if (texto === ''){
      return arreglo
    }

    texto = texto.toLowerCase();

  return arreglo.filter(item =>{
  return item[columna].toLowerCase().includes(texto);
})

  }
}
