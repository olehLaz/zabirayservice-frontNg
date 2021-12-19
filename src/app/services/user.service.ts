import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //один из вариантов как провайдить сервисы
})
export class UserService {
  userInfo: string = 'первый пользователь';

  constructor() { }
}
