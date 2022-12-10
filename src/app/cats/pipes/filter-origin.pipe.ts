import { Pipe, PipeTransform } from "@angular/core";
import { IMiCat } from '../interfaces/cat.interface';

@Pipe({
    name: 'origin'
})
export class FilterOriginPipe implements PipeTransform {

  transform(entrada: IMiCat[], origin: string): IMiCat[] {

    console.log(entrada);

    let salida: IMiCat[] = [];

    entrada.filter(cat => {
        if(cat.origin === origin){
            salida.push(cat)
        }
    })
    return  salida
}

}
