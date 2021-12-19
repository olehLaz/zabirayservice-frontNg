import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class BetterLoggerService extends LoggerService{

  constructor() {
    super();
    this.info('BetterLogger создан');
  }

  override info(msg: string) {
    super.info('-------' + msg + '-----------');
  }

}
