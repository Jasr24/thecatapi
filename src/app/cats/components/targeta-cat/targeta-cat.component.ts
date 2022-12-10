import { Component, Input, OnInit } from '@angular/core';
import { IMiCat } from '../../interfaces/cat.interface';

@Component({
  selector: 'app-targeta-cat',
  templateUrl: './targeta-cat.component.html',
  styleUrls: ['./targeta-cat.component.css']
})
export class TargetaCatComponent implements OnInit {

  @Input()
  cat!: IMiCat;


  constructor() { }

  ngOnInit(): void {
  }

}
