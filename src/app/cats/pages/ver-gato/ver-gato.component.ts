import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IMiCat } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ver-gato',
  templateUrl: './ver-gato.component.html',
  styleUrls: ['./ver-gato.component.css']
})
export class VerGatoComponent implements OnInit {

  cat!: IMiCat;
  backgroundColors: string[] = [
    "#bcaaa4", //Cafe claro
    "#bdbdbd", //gris
    "#e8eaf6",//Blanco-gris
  ]
  colorBackground: string = ''

  constructor(private catService: CatService,
              private snack:MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.colorBackground = this.catService.backgroundRandom(this.backgroundColors);
    this.initGato();
  }

  initGato(){
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.catService.getCatById(id)),
      )
      .subscribe( cat => {
        this.spinner.hide(); 
        this.cat = cat
      },
      error => {
        this.spinner.hide(); 
        this.snack.open('El gato no existe en la base de datos','Redireccionando...',{
          duration:2000,
          panelClass: ['mat-toolbar'],
        });
        this.router.navigate([''])
      })
  }
}