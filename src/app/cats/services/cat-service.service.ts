import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat, ICategory, IImagenCat, IMiCat } from '../interfaces/cat.interface';
import { CatRemoteService } from './remote/cat-remote.service';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseUrl: string = environment.baseUrl;
  private headers = new HttpHeaders({
    'x-api-key': environment.claveApi
  });

  constructor(private catRemote:CatRemoteService) { }

  //Listar cats
   getCats(size: string) : Observable<IMiCat[]>{
    return this.catRemote.getCats(size)
     .pipe(
      map( (res:Cat[])=>{

        return res.map(gato=>{
          return  {
            id: gato.id,
            name: gato.breeds[0].name,
            imagen: gato.url,
            origin: gato.breeds[0].origin,
            country_code: gato.breeds[0].country_code,
            life_span: gato.breeds[0].life_span
          }
        });
      })
     );
   }

   //Obtener cat
   getCatById(id: string): Observable<IMiCat>{
 
    return this.catRemote.getCatById(id)
      .pipe(
        map( (res: Cat ) => {
             let gato: IMiCat = {
              id: res.id,
              name: res.breeds[0].name,
              imagen: res.url,
              origin: res.breeds[0].origin,
              country_code: res.breeds[0].country_code,
              life_span: res.breeds[0].life_span,
              descripcion: res.breeds[0].description,
              dog_friendly: res.breeds[0].dog_friendly,
              wikipedia_url: res.breeds[0].wikipedia_url,

              adaptability: res.breeds[0].adaptability,
              affection_level: res.breeds[0].affection_level,
              child_friendly: res.breeds[0].child_friendly,
              energy_level: res.breeds[0].energy_level,
              grooming: res.breeds[0].grooming,
              health_issues: res.breeds[0].health_issues,
              intelligence: res.breeds[0].intelligence,
              stranger_friendly: res.breeds[0].stranger_friendly,
            }
            return gato
        })
      )
   }

   //Listar las categorias 
   getCategoriesCats(): Observable<ICategory[]>{
    return this.catRemote.getCategoriesCats();
  }

  //Listar imagenes por categoria
  getImagenesCategoris(id: number): Observable<IImagenCat[]>{

    return this.catRemote.getImagenesCategoris(id)
     .pipe(
      map( (res:Cat[])=>{

        return res.map(cat=>{
          return  {
            imagen: cat.url,
          }
        });
      })
     );
  }

  //Seleccionar color random
  backgroundRandom(backgroundColors: string[]): string{
    let ramdon = Math.round((Math.random()*(backgroundColors.length-1)));
    return backgroundColors[ramdon]
  }
}
