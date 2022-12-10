import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat, IMiCat } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseUrl: string = environment.baseUrl;
  private headers = new HttpHeaders({
    'x-api-key': environment.claveApi
  });

  constructor(private http: HttpClient) { }

  //Listar cats
   getCats(size: string) : Observable<IMiCat[]>{

    let url = `${this.baseUrl}/images/search`;
    let params = new HttpParams().set("limit",size).set("has_breeds","1");

    return this.http.get<any>(url, {headers: this.headers, params:params})
     .pipe(
      map( (res:Cat[])=>{

        /* var list:IMiCat[] = [];
        res.forEach((gato) => {
          var cat: IMiCat = {
            id: gato.id,
            name: gato.breeds[0].name,
            imagen: gato.url,
            origin: gato.breeds[0].origin,
            country_code: gato.breeds[0].country_code,
            life_span: gato.breeds[0].life_span
          }
          list.push(cat);
        });  
        */    
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

   migato: IMiCat = {
    id: '1',
    name: 'Gato uno',
    imagen: "https://cdn2.thecatapi.com/images/i4.jpg",
    origin: 'string',
    country_code: 'string',
    life_span: 'string',
  }

   //Cat  FALTA TERMINARLO
   getCat(id: string): Observable<IMiCat>{
    const url = `${this.baseUrl}/images/${id}`;
    let params = new HttpParams().set("has_breeds","1");
    return this.http.get<Cat>(url, {headers: this.headers, params:params})
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
}
