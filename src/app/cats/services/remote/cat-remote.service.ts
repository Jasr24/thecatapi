import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cat, ICategory, IImagenCat } from '../../interfaces/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatRemoteService {

  private baseUrl: string = environment.baseUrl;
  private headers = new HttpHeaders({
    'x-api-key': environment.claveApi
  });

  constructor(private http: HttpClient) { }

  getCats(size: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/images/search`, 
    { headers: this.headers, params: new HttpParams().set("limit", size).set("has_breeds", "1") });
  }

  getCatById(id: string): Observable<any> {
    const url = `${this.baseUrl}/images/${id}`;
    let params = new HttpParams().set("has_breeds","1");
    return this.http.get<Cat>(url, {headers: this.headers, params:params})
  }

  getCategoriesCats(): Observable<ICategory[]>{
    const url = `${this.baseUrl}/categories`;
    return this.http.get<ICategory[]>(url, {headers: this.headers});
  }

  getImagenesCategoris(id: number): Observable<any[]>{
    const url = `${this.baseUrl}/images/search`;
    let params = new HttpParams().set("limit","12").set("category_ids",id.toString());

    return this.http.get<any>(url, {headers: this.headers, params:params})
  }

}
