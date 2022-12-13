import { FilterOriginPipe } from './filter-origin.pipe';

describe('FilterOriginPipe', () => {
  const pipe = new FilterOriginPipe();
  const listCats= [
    {
        "id": "dTlqinfQA",
        "name": "Exotic Shorthair",
        "imagen": "https://cdn2.thecatapi.com/images/dTlqinfQA.jpg",
        "origin": "United States",
        "country_code": "US",
        "life_span": "12 - 15"
    },
    {
        "id": "2xlxL0oI_",
        "name": "Himalayan",
        "imagen": "https://cdn2.thecatapi.com/images/2xlxL0oI_.jpg",
        "origin": "United States",
        "country_code": "US",
        "life_span": "9 - 15"
    },
    {
        "id": "7x-75d7vB",
        "name": "Norwegian Forest Cat",
        "imagen": "https://cdn2.thecatapi.com/images/7x-75d7vB.jpg",
        "origin": "Norway",
        "country_code": "NO",
        "life_span": "12 - 16"
    },
    {
        "id": "J2qM5HR5K",
        "name": "Persian",
        "imagen": "https://cdn2.thecatapi.com/images/J2qM5HR5K.jpg",
        "origin": "Iran (Persia)",
        "country_code": "IR",
        "life_span": "14 - 15"
    },
    {
        "id": "nhwAjEuEG",
        "name": "Selkirk Rex",
        "imagen": "https://cdn2.thecatapi.com/images/nhwAjEuEG.jpg",
        "origin": "United States",
        "country_code": "US",
        "life_span": "14 - 15"
    }
];


  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('should transform condition All', () => {
    let lTest = pipe.transform(listCats,{origin:"All",searchName:""});
    expect(listCats).toEqual(lTest);
  });


  it('should transform condition All and if searchName', () => {

    let resultSearchName = [
      {
        "id": "J2qM5HR5K",
        "name": "Persian",
        "imagen": "https://cdn2.thecatapi.com/images/J2qM5HR5K.jpg",
        "origin": "Iran (Persia)",
        "country_code": "IR",
        "life_span": "14 - 15"
    }
    ]

    let lTest = pipe.transform(listCats,{origin:"All",searchName:"Persian"});
    expect(resultSearchName).toEqual(lTest);
  });

  it('should transform condition Else ', () => {

    let resultElse = [
      {
        "id": "dTlqinfQA",
        "name": "Exotic Shorthair",
        "imagen": "https://cdn2.thecatapi.com/images/dTlqinfQA.jpg",
        "origin": "United States",
        "country_code": "US",
        "life_span": "12 - 15"
    },
    {
        "id": "2xlxL0oI_",
        "name": "Himalayan",
        "imagen": "https://cdn2.thecatapi.com/images/2xlxL0oI_.jpg",
        "origin": "United States",
        "country_code": "US",
        "life_span": "9 - 15"
    },
    {
        "id": "nhwAjEuEG",
        "name": "Selkirk Rex",
        "imagen": "https://cdn2.thecatapi.com/images/nhwAjEuEG.jpg",
        "origin": "United States",
        "country_code": "US",
        "life_span": "14 - 15"
    }
    ]

    let lTest = pipe.transform(listCats,{origin:"United States",searchName:""});
    expect(resultElse).toEqual(lTest);
  });

  it('should transform condition Else and if searchName', () => {

    let resultElseIfSearchName = [
    {
        "id": "2xlxL0oI_",
        "name": "Himalayan",
        "imagen": "https://cdn2.thecatapi.com/images/2xlxL0oI_.jpg",
        "origin": "United States",
        "country_code": "US",
        "life_span": "9 - 15"
    },
  ]

    let lTest = pipe.transform(listCats,{origin:"United States",searchName:"Himalayan"});
    expect(resultElseIfSearchName).toEqual(lTest);
  });

});
