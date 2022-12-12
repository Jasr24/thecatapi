import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [  
    FooterComponent, 
    MenuComponent
  ],
  exports:[
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class SharedModule { }
