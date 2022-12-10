import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IFilterCats, IMiCat } from '../../interfaces/cat.interface';

@Component({
  selector: 'app-filter-origin',
  templateUrl: './filter-origin.component.html',
  styleUrls: ['./filter-origin.component.css']
})
export class FilterOriginComponent implements OnInit{

 
  form!:FormGroup;

  @Input("cats")
  set setCat(cats:IMiCat[]){  
    this.initCountries(cats);
  }
  
  @Output() 
  filterValueChange = new EventEmitter<IFilterCats>();

  countries: string[] = [];
  termino: string = ''; ////OJOJOJOJOJOJO

  constructor(private fb:FormBuilder) { 
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(){
    this.form = this.fb.group(
      {
        origin:["TODOS"],
        searchName:[""]
      }
    );

    this.form.valueChanges.subscribe(value=>{
      this.filterValueChange.next(value);
    })
     
  }
  
  getControl(key:string):FormControl{
    return this.form.controls[key] as FormControl;
  }

  private initCountries(cats:IMiCat[]){
    this.countries = ["TODOS"];
    
    let mySet: Set<string> = new Set<string>();

    cats.forEach(cat => {
      mySet.add(cat.origin);
    })

    mySet.forEach(r => {
      this.countries.push(r);
    })
    
    let countrySelected = this.getControl('origin').value;

    if(countrySelected!=="TODOS" && this.countries.findIndex( country=> country === countrySelected ) ==- 1){
      this.getControl('origin').setValue("TODOS");
    }

  }

}
