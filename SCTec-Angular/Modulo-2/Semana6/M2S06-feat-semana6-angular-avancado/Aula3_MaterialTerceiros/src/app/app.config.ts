// app.config.ts - CONFIGURAÇÃO GLOBAL da aplicação.
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// TODO 1 (BIBLIOTECAS NO PROJETO) - parte C: a biblioteca de terceiros ngx-mask precisa de um provider.
//   1) importe:  import { provideNgxMask } from 'ngx-mask';
//   2) acrescente  provideNgxMask()  no final do array providers.
// (Antes, no terminal:  npm install ngx-mask)

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
