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
  /** list*/
  @Input("list")
  set setList(list:string[]){
    this.list = list;
    this.filterBanks();
  }

  /** control for the selected*/
  @Input("control")
  public ctrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public filterCtrl: FormControl = new FormControl();

  /** list of filtered by search keyword */
  public filtered: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  @ViewChild('singleSelect')
  singleSelect!: MatSelect;

  

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  constructor() { }

  ngOnInit() {
    // load the initial bank list
    this.filtered.next(this.list.slice());

    // listen for search field value changes
    this.filterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
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
   * Sets the initial value after the filtered are loaded initially
   */
  protected setInitialValue() {
    this.filtered
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filtered are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: string, b: string) => a === b //=> a && b && a.id === b.id;
      });
  }

  protected filterBanks() {
    if (!this.list) {
      return;
    }
    // get the search keyword
    let search = this.filterCtrl.value;
    if (!search) {
      this.filtered.next(this.list.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filtered.next(
      this.list.filter(cat => cat.toLowerCase().indexOf(search) > -1)
    );
  }
}
