import {Observable} from "rxjs";

export interface CommonDAO<T> {
  //получить все значения
  getAll(): Observable<T[]>;

  //получить одно значение
  get(id: number): Observable<T>;

  //обновить значение
  update(obj: T): Observable<T>;

  //удалить значение
  delete(id: number): Observable<T>;

  //добавить значение
  add(obj: T): Observable<T>;


}
