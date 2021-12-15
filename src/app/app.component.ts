import { Component } from '@angular/core';
import {CountState} from "./redux/reducers/count/count.reducer";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectCount, selectUpdateAt} from "./redux/selectors/count.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public count$: Observable<number> = this.store$.pipe(select(selectCount))
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdateAt))

  constructor(private store$: Store<CountState>) {
  }

  increase() {

  }
  decrease() {

  }
  clear() {

  }

}
