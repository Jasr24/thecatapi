import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat-service.service';
import { ICategory } from '../../interfaces/cat.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-por-categoria',
  templateUrl: './por-categoria.component.html',
  styleUrls: ['./por-categoria.component.css']
})
export class PorCategoriaComponent implements OnInit {

  categories: ICategory[] = [];
  imganesCats: string[] = [];
  nombreCategory: string = '';

  backgroundColors: string[] = [
    "#e8eaf6",//Blanco-gris
    "#81c784", //Verde
    "#bbdefb", //Azul muyclaro
    "#e1bee7", //Rosado
    "#fff59d", //Amarillo
    "#FFFFFF" //blanco
  ]
  colorBackground: string = ''

  constructor(private catService: CatService,
              private snack: MatSnackBar,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.serviceCategoriesCats();
    
  }

  listarImagenes(idCategoria: number, nombreCategory: string){
    this.spinner.show();
    this.nombreCategory = nombreCategory;

    this.catService.getCategoryImages(idCategoria)
      .subscribe(listCats => {
        this.imganesCats = listCats.map(catImage=>catImage.imagen);
        this.spinner.hide();  
      })
  }

  serviceCategoriesCats(){
    this.spinner.show();

    this.catService.getCategoriesCats()
        .subscribe(categories => {
          categories.map(category => {
            this.categories.push(category);
            this.spinner.hide(); 
          })
        },
        error => {
          this.spinner.hide(); 
          this.snack.open("Lo sentimos ha ocurrido un error inesperado", 'Intentalo de nuevo mas tarde...',{
            duration:2000,
            panelClass: ['mat-toolbar'],
          });
        })
  }

}
