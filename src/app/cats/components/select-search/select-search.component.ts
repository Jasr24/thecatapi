import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.css']
})
export class SelectSearchComponent implements OnInit, AfterViewInit, OnDestroy {

  list: string[] = [];
  // list
  @Input("list")
  set setList(list:string[]){
    this.list = list;
    this.filterCats();
  }

  // control para el seleccionado
  @Input("control")
  public ctrl: FormControl = new FormControl();

  // control para la palabra clave del filtro MatSelect 
  public filterCtrl: FormControl = new FormControl();

  // lista de filtrados por palabra clave de búsqueda 
  public filtered: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  @ViewChild('singleSelect')
  singleSelect!: MatSelect;

  

  // Sujeto que emite cuando el componente ha sido destruido.
  protected _onDestroy = new Subject<void>();


  constructor() { }

  ngOnInit() {
    // cargar la lista inicial de los gatos
    this.filtered.next(this.list.slice());

    // escuche los cambios en el valor del campo de búsqueda
    this.filterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCats();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Establece el valor inicial después de que los filtrados se carguen inicialmente
   */
  protected setInitialValue() {
    this.filtered
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: string, b: string) => a === b;
      });
  }

  protected filterCats() {
    if (!this.list) {
      return;
    }
    // obtener la palabra clave de búsqueda
    let search = this.filterCtrl.value;
    if (!search) {
      this.filtered.next(this.list.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filtrar los gatos
    this.filtered.next(
      this.list.filter(cat => cat.toLowerCase().indexOf(search) > -1)
    );
  }
}
