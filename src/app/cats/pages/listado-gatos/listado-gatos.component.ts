import { Component, OnInit } from '@angular/core';
import { IFilterCats, IMiCat } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-listado-gatos',
  templateUrl: './listado-gatos.component.html',
  styleUrls: ['./listado-gatos.component.css']
})
export class ListadoGatosComponent implements OnInit {

  limitConsult='15';

  cats: IMiCat[] = [];

  filter:IFilterCats = {
    origin:"All",
    searchName:""
  }

  constructor(private catService: CatService,
              private snack: MatSnackBar,
              private spinner: NgxSpinnerService) { 

  }

  ngOnInit(): void {

    if(sessionStorage.getItem('cats')){
      var limit = sessionStorage.getItem('limitConsult');
      this.limitConsult = JSON.parse(limit!);

      var arrayCats = sessionStorage.getItem('cats');
      this.cats = JSON.parse(arrayCats!);
      return;
    }

    this.spinner.show();

    this.catService.getCats(this.limitConsult)
        .subscribe(resp => {
          this.cats = resp,
          sessionStorage.setItem('cats', JSON.stringify(resp));
          sessionStorage.setItem('limitConsult', this.limitConsult);
          this.spinner.hide();          
        },
        error => {
            this.errors('Lo sentimios ha ocurrido un error inesperado', 'Intentalo de nuevo mas tarde...');     
        });   
   
 }

 consultar(){

  const size = Number.parseInt(this.limitConsult)

  if(isNaN(size) || size < 1 || size > 100){
    this.errors('Lo sentimios la consulta debe ser realizada entre 1 y 100', 'Intentalo de nuevo...');
    return
  }
  this.spinner.show();

  this.catService.getCats(this.limitConsult.toString())
        .subscribe(resp => {
          this.cats = resp,
          sessionStorage.setItem('cats', JSON.stringify(resp));
          sessionStorage.setItem('limitConsult', this.limitConsult);
          this.spinner.hide();          
        },
        error => {
          this.errors('Lo sentimios ha ocurrido un error inesperado', 'Intentalo de nuevo mas tarde...');
        });
 }

 valueChange(data:IFilterCats){
   this.filter = data;
 }

 errors(mesage: string, opcion: string){
    this.spinner.hide();          
    this.snack.open(mesage, opcion,{
    duration:2000,
    panelClass: ['mat-toolbar'],
  });
 }
 
}