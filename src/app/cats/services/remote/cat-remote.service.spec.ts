import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CatRemoteService } from './cat-remote.service';

describe('CatRemoteService', () => {
  let service: CatRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CatRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should func getCats',()=>{
    service.getCats("1");
    expect(service.getCats).toBeDefined();
  })

  it('should func getCatById',()=>{
    service.getCatById("1");
    expect(service.getCatById).toBeDefined();
  })

  it('should func getCategoriesCats',()=>{
    service.getCategoriesCats();
    expect(service.getCategoriesCats).toBeDefined();
  })

  it('should func getImagenesCategoris',()=>{
    service.getCategoryImages(1);
    expect(service.getCategoryImages).toBeDefined();
  })

});
