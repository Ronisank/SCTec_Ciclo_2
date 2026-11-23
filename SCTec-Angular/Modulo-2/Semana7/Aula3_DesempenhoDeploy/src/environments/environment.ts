// environment.ts - configurações de PRODUÇÃO (usado no ng build e no site publicado).
// Criado com: ng g environments
// No ng serve, o angular.json TROCA este arquivo pelo environment.development.ts (fileReplacements).
// NUNCA coloque senhas ou chaves secretas aqui: tudo isto vai para o navegador do usuário.
export const environment = {
  production: true,
  nome: 'produção',
  apiAuth: 'https://dummyjson.com/auth',
  apiCursos: 'api/cursos.json',
};
