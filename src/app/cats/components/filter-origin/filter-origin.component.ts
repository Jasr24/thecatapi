import { Component, Input, OnInit } from '@angular/core';
import { IMiCat } from '../../interfaces/cat.interface';

@Component({
  selector: 'app-filter-origin',
  templateUrl: './filter-origin.component.html',
  styleUrls: ['./filter-origin.component.css']
})
export class FilterOriginComponent implements OnInit{

  cats!: IMiCat[]

  @Input("cats")
  set setCat(cats:IMiCat[]){
    this.cats = cats;
    this.initCountries();
  }
  
  

  countries: string[] = [];

  termino: string = ''; ////OJOJOJOJOJOJO

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  

  private initCountries(){

    this.countries = [];
    
    let mySet: Set<string> = new Set<string>();

    this.cats.forEach(cat => {
      mySet.add(cat.origin);
    })

    mySet.forEach(r => {
      this.countries.push(r);
    })

  }

}
