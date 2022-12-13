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
      {
        headers: this.headers,
        params: new HttpParams().set("limit", size).set("has_breeds", "1")
      });
  }

  getCatById(id: string): Observable<any> {
    return this.http.get<Cat>(`${this.baseUrl}/images/${id}`,
      {
        headers: this.headers,
        params: new HttpParams().set("has_breeds", "1")
      })
  }

  getCategoriesCats(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.baseUrl}/categories`,
      { headers: this.headers });
  }

  getCategoryImages(id: number): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/images/search`,
      {
        headers: this.headers,
        params: new HttpParams().set("limit", "12").set("category_ids", id.toString())
      })
  }

}
