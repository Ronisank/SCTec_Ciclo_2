// app.config.ts - CONFIGURAÇÃO GLOBAL da aplicação.
// Semana 7 · Aula 1: Store do NgRx (estado global), effects e Redux DevTools.
// Semana 7 · Aula 2: interceptor HTTP de autenticação.
import { ApplicationConfig, LOCALE_ID, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideNgxMask } from 'ngx-mask';
import { authInterceptor } from '@core/auth/auth-interceptor';
import * as cursosEffects from '@core/state/cursos.effects';
import { cursosFeature } from '@core/state/cursos.feature';
import { routes } from './app.routes';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // TODO 3 - parte B: registre o interceptor. Troque a linha abaixo por:
    //   provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideNgxMask(),

    // NgRx: a Store (o "cofre" central), a fatia "cursos" e os effects
    provideStore(),
    provideState(cursosFeature),
    provideEffects(cursosEffects),
    // Redux DevTools (extensão do Chrome): histórico de actions e "viagem no tempo"
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
