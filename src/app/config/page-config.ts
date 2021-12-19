import {InjectionToken} from "@angular/core";


/*
IoC Containers
Inversion of Control - хранит в себе конфигурации
какие зависимости как решать - провайдить.
container.get(Foo) создаст объект или вернёт существующий
 */
export interface PageConfig {
  title: string;
}
export class PageConfigValue implements PageConfig {
  private _title: string = ' значение из PageConfigValue';


  get title(): string {
    return this._title;
  }
}


export const PAGE_CONFIG = new InjectionToken<PageConfig>('page.config');
