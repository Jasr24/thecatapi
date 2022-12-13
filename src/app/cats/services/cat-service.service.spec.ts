import { TestBed } from '@angular/core/testing';

import { CatService } from './cat-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('CatServiceService', () => {
  let service: CatService;

 //let httpClient:  HttpClient
 //let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CatService);
    //httpClient = TestBed.inject(HttpClient);
    //httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should func getCats',()=>{

    spyOn(service,"getCats").and.returnValue(
      new Observable(obs=>{
        obs.next([
          { id: "122",
            name: "hola",
            imagen: "https://cdn2.thecatapi.com/images/i-j1kCi3b.jpg",
            origin: "colombia",
            country_code: "co",
            life_span: "7",}
        ])
      })
    );
    service.getCats("3").subscribe(r=>{
      console.log(r);
    });

  })

  /*it('should obtener los gatos, getCats(size: string) : Observable<IMiCat[]> return value from observable', (done: DoneFn) => {

    let size = '1'
    let url = 'https://api.thecatapi.com/v1/images/search';
    let claveApi = 'live_32jyAKb9ojOzbE8a7H7eWGAHuD1PeRWhOwUHD74A8DD0B3n2yzX2hpmmUV2g7PuY'

    const urlNativo: string = service.getCat.arguments('url');
    expect(urlNativo).toEqual(url);

    // service.getCats(size).subscribe( (value) => {
    //   expect(value).toBe('observable value');
    //   done();
    // })
  })*/
});
