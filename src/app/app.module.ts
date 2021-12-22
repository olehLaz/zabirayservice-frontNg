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
import {PAGE_CONFIG, PageConfigValue} from "./config/page-config";
import {ProductService} from "./services/product.service";
import {GreetingsService} from "./services/greetings.service";
import {HumanService} from "./services/human.service";
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { TechnologiesComponent } from './views/technologies/technologies.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ProfileComponent } from './views/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TechnologiesComponent,
    NavbarComponent,
    ProfileComponent
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

  providers: [
    ProductService, //добавляем сервис
    BetterLoggerService,
    {
      provide: LoggerService,
      useExisting: BetterLoggerService,
      // useClass: BetterLoggerService
    },
    {
      provide: PAGE_CONFIG,
     useClass: PageConfigValue
    },

    HumanService,
    {
      provide: GreetingsService,
      useFactory: (
        loggerService: LoggerService,
        humanService: HumanService,
      ) => {
        return new GreetingsService(loggerService, humanService.information().name);
      },
      deps: [LoggerService, HumanService]
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
