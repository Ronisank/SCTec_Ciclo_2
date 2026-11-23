// app.config.ts - CONFIGURAÇÃO GLOBAL. Cada "provide..." liga um recurso para o app inteiro.
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// TODO 4 (parte 2) - LIGAR O HttpClient E O IDIOMA
// a) import { provideHttpClient } from '@angular/common/http';
//    e coloque provideHttpClient() na lista de providers.
// b) Datas em português nos pipes:
//    import { LOCALE_ID } from '@angular/core';
//    import { registerLocaleData } from '@angular/common';
//    import localePt from '@angular/common/locales/pt';
//    registerLocaleData(localePt);                       (aqui fora, antes do appConfig)
//    { provide: LOCALE_ID, useValue: 'pt-BR' }          (dentro de providers)

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // mostra no console erros não tratados (DEBUG)
    provideRouter(routes), // liga o ROTEAMENTO com a lista do app.routes.ts
  ],
};
