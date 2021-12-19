import { Injectable } from '@angular/core';

@Injectable()
export class HumanService {

  information(): {name: string, age: number} {
    return  {
      name: 'Max',
      age: 30
    };
  }

  constructor() { }
}
