// app.config.ts - CONFIGURAÇÃO GLOBAL da aplicação.
// Semana 7 · Aula 1: Store do NgRx (estado global), effects e Redux DevTools.
import { ApplicationConfig, LOCALE_ID, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideNgxMask } from 'ngx-mask';
import * as cursosEffects from '@core/state/cursos.effects';
import { cursosFeature } from '@core/state/cursos.feature';
import { routes } from './app.routes';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideNgxMask(),

    // TODO 1 (STORE NO PROJETO): registre o NgRx. Acrescente estas 4 linhas aqui:
    //   provideStore(),                    -> cria a Store (o "cofre" central do estado)
    //   provideState(cursosFeature),       -> registra a fatia "cursos" (estado + reducer)
    //   provideEffects(cursosEffects),     -> liga os effects (chamadas à API)
    //   provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),  -> conecta o Redux DevTools
    // Os imports já estão no topo do arquivo (aparecem "apagados" porque ainda não são usados).
    // Antes do TODO 1, a tela fica em branco e o console (F12) mostra: NG0201: No provider found for "Store".
  ],
};
