import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, decrease, increase} from "./redux/actions/count.actions";
import {countSelector} from "./redux/selectors/count.selectors";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // counter: number = 0;
  updatedAt?: number;

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count<=0));
  /*
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public disableDecrease$: Observable<boolean> = this.count$.pipe(map(count => count<=0));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdateAt));

*/


  constructor(private store: Store) {
  }

  /*
  get cannotDecrease(): boolean {
    return false;
  }
*/
  increase(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(clear());
  }
}
