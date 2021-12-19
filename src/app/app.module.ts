import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from "./app.effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {metaReducers, reducers} from "./redux/reducers";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoggerService} from "./services/logger.service";
import {BetterLoggerService} from "./services/better-logger.service";
import {PAGE_CONFIG} from "./config/page-config";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule
  ],
  //добавляем сервис
  providers: [
    BetterLoggerService,
    {
      provide: LoggerService,
      useExisting: BetterLoggerService,
      // useClass: BetterLoggerService
    },
    {
      provide: PAGE_CONFIG,
      useValue: { title: 'приложение из примеров'}
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
