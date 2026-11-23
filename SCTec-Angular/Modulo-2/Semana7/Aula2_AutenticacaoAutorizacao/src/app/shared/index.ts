// index.ts - "BARREL" (barril): a vitrine da pasta shared.
// Reexporta o que a pasta oferece. Assim, quem usa importa de UM ponto só:
//   import { SharedModule, Curso } from '@shared';
export * from './components/page-header/page-header';
export * from './pipes/cep-pipe';
export * from './shared-module';
export * from './models/aluno';
export * from './models/curso';
export * from './models/endereco';
export * from './models/mensagem-contato';
export * from './models/usuario';
