import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  info(msg: string) {
    console.log(msg);
  }

  constructor() { }
}
