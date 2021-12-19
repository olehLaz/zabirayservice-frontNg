import {Component, Inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, decrease, increase} from "./redux/actions/count.actions";
import {countSelector, updateAtSelector} from "./redux/selectors/count.selectors";
import {map} from "rxjs/operators";
import {LoggerService} from "./services/logger.service";
import {BetterLoggerService} from "./services/better-logger.service";
import {PAGE_CONFIG, PageConfig} from "./config/page-config";
import {UserService} from "./services/user.service";
import {ProductService} from "./services/product.service";
import {ImageService} from "./services/image.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImageService] // добавляем сразу в компоненту
 // viewProviders: [ImageService] // добавляем сразу в компоненту


})
export class AppComponent {

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count<=0));
  updatedAt$ = this.store.select(updateAtSelector);
  /*
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public disableDecrease$: Observable<boolean> = this.count$.pipe(map(count => count<=0));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdateAt));
*/
  title: string;
  user: string;


  constructor(private store: Store,
              private logger: LoggerService,
              private betterLogger: BetterLoggerService,
              @Inject(PAGE_CONFIG) pageConfig: PageConfig,
              private userService: UserService, //подключаем в конструктор в компоненте
              private productService: ProductService, //подключаем в конструктор в компоненте
              private imageService: ImageService

              ) {
    this.title = pageConfig.title;
    logger.info('app.component инициализороан' );
    betterLogger.info('app.component инициализороан от  betterLogger' );
    this.user = userService.userInfo;
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.store.dispatch(clear());
  }
}
