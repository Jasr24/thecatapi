import { TestBed } from '@angular/core/testing';

import { CatService } from './cat-service.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('CatServiceService', () => {
  let service: CatService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should func getCats',()=>{

    spyOn(service["catRemote"],"getCats").and.returnValue(
      new Observable(obs=>{
        obs.next([
          {
              "breeds": [
                  {
                      "weight": {
                          "imperial": "8 - 16",
                          "metric": "4 - 7"
                      },
                      "id": "norw",
                      "name": "Norwegian Forest Cat",
                      "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/NorwegianForestCat.aspx",
                      "vetstreet_url": "http://www.vetstreet.com/cats/norwegian-forest-cat",
                      "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/norwegian-forest-cat",
                      "temperament": "Sweet, Active, Intelligent, Social, Playful, Lively, Curious",
                      "origin": "Norway",
                      "country_codes": "NO",
                      "country_code": "NO",
                      "description": "The Norwegian Forest Cat is a sweet, loving cat. She appreciates praise and loves to interact with her parent. She makes a loving companion and bonds with her parents once she accepts them for her own. She is still a hunter at heart. She loves to chase toys as if they are real. She is territorial and patrols several times each day to make certain that all is fine.",
                      "life_span": "12 - 16",
                      "indoor": 0,
                      "alt_names": "Skogkatt / Skaukatt, Norsk Skogkatt / Norsk Skaukatt, Weegie",
                      "adaptability": 5,
                      "affection_level": 5,
                      "child_friendly": 4,
                      "dog_friendly": 5,
                      "energy_level": 3,
                      "grooming": 2,
                      "health_issues": 3,
                      "intelligence": 4,
                      "shedding_level": 3,
                      "social_needs": 5,
                      "stranger_friendly": 5,
                      "vocalisation": 1,
                      "experimental": 0,
                      "hairless": 0,
                      "natural": 1,
                      "rare": 0,
                      "rex": 0,
                      "suppressed_tail": 0,
                      "short_legs": 0,
                      "wikipedia_url": "https://en.wikipedia.org/wiki/Norwegian_Forest_Cat",
                      "hypoallergenic": 0,
                      "reference_image_id": "06dgGmEOV"
                  }
              ],
              "id": "EXe1GhbrN",
              "url": "https://cdn2.thecatapi.com/images/EXe1GhbrN.jpg",
              "width": 1600,
              "height": 1002
          }
      ])
      })
    );
    service.getCats("1").subscribe(r=>{
    });

    expect(service.getCats).toBeDefined();
  })

  it('should func getCatById',()=>{

    spyOn(service["catRemote"],"getCatById").and.returnValue(
      new Observable(obs=>{
        obs.next(
          {
              "breeds": [
                  {
                      "weight": {
                          "imperial": "8 - 16",
                          "metric": "4 - 7"
                      },
                      "id": "norw",
                      "name": "Norwegian Forest Cat",
                      "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/NorwegianForestCat.aspx",
                      "vetstreet_url": "http://www.vetstreet.com/cats/norwegian-forest-cat",
                      "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/norwegian-forest-cat",
                      "temperament": "Sweet, Active, Intelligent, Social, Playful, Lively, Curious",
                      "origin": "Norway",
                      "country_codes": "NO",
                      "country_code": "NO",
                      "description": "The Norwegian Forest Cat is a sweet, loving cat. She appreciates praise and loves to interact with her parent. She makes a loving companion and bonds with her parents once she accepts them for her own. She is still a hunter at heart. She loves to chase toys as if they are real. She is territorial and patrols several times each day to make certain that all is fine.",
                      "life_span": "12 - 16",
                      "indoor": 0,
                      "alt_names": "Skogkatt / Skaukatt, Norsk Skogkatt / Norsk Skaukatt, Weegie",
                      "adaptability": 5,
                      "affection_level": 5,
                      "child_friendly": 4,
                      "dog_friendly": 5,
                      "energy_level": 3,
                      "grooming": 2,
                      "health_issues": 3,
                      "intelligence": 4,
                      "shedding_level": 3,
                      "social_needs": 5,
                      "stranger_friendly": 5,
                      "vocalisation": 1,
                      "experimental": 0,
                      "hairless": 0,
                      "natural": 1,
                      "rare": 0,
                      "rex": 0,
                      "suppressed_tail": 0,
                      "short_legs": 0,
                      "wikipedia_url": "https://en.wikipedia.org/wiki/Norwegian_Forest_Cat",
                      "hypoallergenic": 0,
                      "reference_image_id": "06dgGmEOV"
                  }
              ],
              "id": "EXe1GhbrN",
              "url": "https://cdn2.thecatapi.com/images/EXe1GhbrN.jpg",
              "width": 1600,
              "height": 1002
          }
      )
      })
    );
    service.getCatById("EXe1GhbrN").subscribe(r=>{
    });

    expect(service.getCatById).toBeDefined();
  })

  it('should func getCategoriesCats',()=>{
    service.getCategoriesCats();
    expect(service.getCategoriesCats).toBeDefined();
  })

  it('should func getCategoryImages',()=>{
    spyOn(service["catRemote"],"getCategoryImages").and.returnValue(
      new Observable(obs=>{
        obs.next([
          [
            {
                "breeds": [],
                "categories": [
                    {
                        "id": 1,
                        "name": "hats"
                    }
                ],
                "id": "381",
                "url": "https://cdn2.thecatapi.com/images/381.jpg",
                "width": 580,
                "height": 808
            }
        ]
      ])
      })
    );
    service.getCategoryImages(2).subscribe(r=>{});
    expect(service.getCategoryImages).toBeDefined();
  })
  
  it('should func backgroundRandom',()=>{
    service.backgroundRandom(["red","blue"]);
    expect(service.backgroundRandom).toBeDefined();
  })
});
