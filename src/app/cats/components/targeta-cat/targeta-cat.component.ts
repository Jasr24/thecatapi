import { Component, Input, OnInit } from '@angular/core';
import { IMiCat } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat-service.service';

@Component({
  selector: 'app-targeta-cat',
  templateUrl: './targeta-cat.component.html',
  styleUrls: ['./targeta-cat.component.css']
})
export class TargetaCatComponent implements OnInit {

  colorBackground: string = '';
  backgroundColors: string[] = [
    "#e8eaf6",//Blanco-gris
    "#81c784", //Verde
    "#f48fb1", //Rosado
    "#bbdefb", //Azul muyclaro
    "#fff59d", //Amarillo
  ]

  @Input()
  cat!: IMiCat;


  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.colorBackground = this.catService.backgroundRandom(this.backgroundColors);
  }

}
