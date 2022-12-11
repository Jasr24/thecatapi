import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
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

  constructor(private catService: CatService,
              private activatedRoute: ActivatedRoute,
              private snack:MatSnackBar,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.catService.getCat(id)),
        tap(console.log),
      )
      .subscribe( cat => {
        this.spinner.hide(); 
        this.cat = cat
      },
      error => {
        this.spinner.hide(); 
        this.snack.open('El gato no existe en la base de datos','Redireccionando...',{
          duration:2000,
          panelClass: ['mat-toolbar', 'mat-primary'],
        });
        this.router.navigate([''])
        console.log(error);
      })
  }
}