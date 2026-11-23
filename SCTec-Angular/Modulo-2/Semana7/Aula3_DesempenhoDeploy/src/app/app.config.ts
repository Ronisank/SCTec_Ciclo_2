// app.config.ts - CONFIGURAÇÃO GLOBAL da aplicação.
// Semana 7 · Aula 1: Store do NgRx (estado global), effects e Redux DevTools.
// Semana 7 · Aula 2: interceptor HTTP de autenticação.
// Semana 7 · Aula 3: preloading e environment.
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideNgxMask } from 'ngx-mask';
import { authInterceptor } from '@core/auth/auth-interceptor';
import * as cursosEffects from '@core/state/cursos.effects';
import { cursosFeature } from '@core/state/cursos.feature';
// TODO 4 - parte C: depois do alias @env (parte B), descomente a linha abaixo:
// import { environment } from '@env/environment';
import { routes } from './app.routes';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // TODO 3 - parte C (PRELOADING): depois que a tela abre, baixe os outros chunks em segundo plano.
    //   Troque a linha abaixo por:  provideRouter(routes, withPreloading(PreloadAllModules)),
    provideRouter(routes),
    // Aula 2: todo pedido HTTP passa pelo authInterceptor (coloca o token)
    provideHttpClient(withInterceptors([authInterceptor])),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideNgxMask(),

    // NgRx: a Store (o "cofre" central), a fatia "cursos" e os effects
    provideStore(),
    provideState(cursosFeature),
    provideEffects(cursosEffects),
    // Redux DevTools (extensão do Chrome): histórico de actions e "viagem no tempo"
    provideStoreDevtools({ maxAge: 25, logOnly: true /* TODO 4 - parte C: troque true por environment.production */ }),
  ],
};
