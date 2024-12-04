import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./users/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./users/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./users/register/register.module').then(m => m.RegisterPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
