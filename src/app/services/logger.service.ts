import { Injectable } from '@angular/core';

@Injectable(
//  { providedIn: 'root'} //регистрируем с app.module.ts
  )
export class LoggerService {
  info(msg: string) {
    console.log(msg);
  }

  constructor() { }
}
