import { Component, OnInit } from '@angular/core';
import { IMiCat } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listado-gatos',
  templateUrl: './listado-gatos.component.html',
  styleUrls: ['./listado-gatos.component.css']
})
export class ListadoGatosComponent implements OnInit {

  limitConsult='15';

  cats: IMiCat[] = [];

  constructor(private catService: CatService,
              private snack: MatSnackBar) { 

  }

  ngOnInit(): void {

    if(localStorage.getItem('cats')){
      var limit = localStorage.getItem('limitConsult');
      this.limitConsult = JSON.parse(limit!);

      var arrayCats = localStorage.getItem('cats');
      this.cats = JSON.parse(arrayCats!);
      return;
    }

    this.catService.getCats(this.limitConsult)
        .subscribe(resp => {
          this.cats = resp,
          localStorage.setItem('cats', JSON.stringify(resp));          
        });   
   
 }

 consultar(){

  const size = Number.parseInt(this.limitConsult)

  if(isNaN(size) || size < 1 || size > 100){
      this.snack.open('Lo sentimios la consulta debe ser realizada entre 1 y 100','Intentalo de nuevo...',{
      duration:2000,
      panelClass: ['mat-toolbar', 'mat-primary'],
    });
    return
  }

  this.catService.getCats(this.limitConsult.toString())
        .subscribe(resp => {
          this.cats = resp,
          localStorage.setItem('cats', JSON.stringify(resp));
          localStorage.setItem('limitConsult', this.limitConsult)
        },
        error => {
          this.snack.open('Lo sentimios ha ocurrido un error inesperado','Intentalo de nuevo mas tarde...',{
            duration:2000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        });
 }
 
}
/*this.cats = [      
     {
       id: '1',
       name: 'Gato uno',
       imagen: "https://cdn2.thecatapi.com/images/i4.jpg",
       origin: 'string',
       country_code: 'string',
       life_span: 'string'
     },
     {
       id: '2',
       name: 'Gato dos',
       imagen: "https://cdn2.thecatapi.com/images/ie5eM6OOa.jpg",
       origin: 'string',
       country_code: 'string',
       life_span: 'string'
     },
     {
       id: '3',
       name: 'Gato tres',
       imagen: "https://cdn2.thecatapi.com/images/cIFwPWy84.jpg",
       origin: 'string',
       country_code: 'string',
       life_span: 'string'
     }
   ]*/