import {Injectable} from '@angular/core';
import {LoggerService} from "./logger.service";

/*
@Injectable({
  providedIn: 'root'
})*/
export class GreetingsService {

  constructor(
    private loggerService: LoggerService,
    private name: string,
  ) {
    this.loggerService.info(name + ' use GreetingsService ');
  }
  public getMessage() {
    return this.name + ' спасибо спасибо спасибо спасибо спасибо '
  }

}
