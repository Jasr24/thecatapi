import { Pipe, PipeTransform } from "@angular/core";
import { IMiCat } from '../interfaces/cat.interface';

@Pipe({
    name: 'origin'
})
export class FilterOrigin implements PipeTransform{

    transform(entrada: IMiCat[], origin: string){

        
    }

}