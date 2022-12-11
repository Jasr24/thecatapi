import { Pipe, PipeTransform } from "@angular/core";
import { IFilterCats, IMiCat } from '../interfaces/cat.interface';

@Pipe({
    name: 'origin'
})
export class FilterOriginPipe implements PipeTransform {

  transform(entrada: IMiCat[], value: IFilterCats): IMiCat[] {

    return entrada.filter(cat => {

        if(value.origin === 'All'){
            if(value.searchName.trim() != ''){
                return cat.name.toLowerCase().indexOf(value.searchName.trim().toLowerCase()) != -1;
            }
            return true;
        } else {
            if(value.searchName.trim() != ''){
                return cat.origin === value.origin && cat.name.toLowerCase().indexOf(value.searchName.toLowerCase()) != -1;     
            }
            return cat.origin === value.origin;
        }
    });
}

}
