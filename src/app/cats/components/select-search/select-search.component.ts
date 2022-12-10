import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

  /** list of cats */
  protected cats: string[] = ["colombia",'venezuela', "peru","ecuador",'panama','brazil'];

  /** control for the selected cat */
  public catCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public catFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredCats: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  @ViewChild('singleSelect')
  singleSelect!: MatSelect;

  

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  constructor() { }

  ngOnInit() {
    // set initial selection
    this.catCtrl.setValue(this.cats[10]);

    // load the initial bank list
    this.filteredCats.next(this.cats.slice());

    // listen for search field value changes
    this.catFilterCtrl.valueChanges
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
   * Sets the initial value after the filteredCats are loaded initially
   */
  protected setInitialValue() {
    this.filteredCats
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredCats are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: string, b: string) => a === b //=> a && b && a.id === b.id;
      });
  }

  protected filterBanks() {
    if (!this.cats) {
      return;
    }
    // get the search keyword
    let search = this.catFilterCtrl.value;
    if (!search) {
      this.filteredCats.next(this.cats.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCats.next(
      this.cats.filter(cat => cat.toLowerCase().indexOf(search) > -1)
    );
  }
}
