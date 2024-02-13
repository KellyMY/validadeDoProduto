import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full',
  },
  {
    path: 'folder',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'usuario',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  },
  {
    path: 'configuracao',
    loadComponent: () => import('./configuracao/configuracao.page').then( m => m.ConfiguracaoPage)
  },
  {
    path: 'produto',
    loadComponent: () => import('./produto/produto.page').then( m => m.ProdutoPage)
  },
  {
    path: 'detalhe-produto',
    loadComponent: () => import('./detalhe-produto/detalhe-produto.page').then( m => m.DetalheProdutoPage)
  },  {
    path: 'photo',
    loadComponent: () => import('./photo/photo.page').then( m => m.PhotoPage)
  },

];
