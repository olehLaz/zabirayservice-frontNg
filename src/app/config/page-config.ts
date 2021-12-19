import {InjectionToken} from "@angular/core";
import {Container} from "@angular/compiler/src/i18n/i18n_ast";

/*
IoC Containers
Inversion of Control - хранит в себе конфигурации
какие зависимости как решать - провайдить.
container.get(Foo) создаст объект или вернёт существующий
 */
export interface PageConfig {
  title: string;
}

export const PAGE_CONFIG = new InjectionToken<PageConfig>('page.config');
