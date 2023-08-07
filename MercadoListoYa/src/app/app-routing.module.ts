import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./pages/proyecto/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'carnes',
    loadChildren: () => import('./pages/proyecto/carnes/carnes.module').then( m => m.CarnesPageModule)
  },
  {
    path: 'pollo',
    loadChildren: () => import('./pages/proyecto/pollo/pollo.module').then( m => m.PolloPageModule)
  },
  {
    path: 'verduras',
    loadChildren: () => import('./pages/proyecto/verduras/verduras.module').then( m => m.VerdurasPageModule)
  },
  {
    path: 'hogar',
    loadChildren: () => import('./pages/proyecto/hogar/hogar.module').then( m => m.HogarPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./pages/proyecto/personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'mascotas',
    loadChildren: () => import('./pages/proyecto/mascotas/mascotas.module').then( m => m.MascotasPageModule)
  },
  {
    path: 'abarrotes',
    loadChildren: () => import('./pages/proyecto/abarrotes/abarrotes.module').then( m => m.AbarrotesPageModule)
  },
  {
    path: 'bebe',
    loadChildren: () => import('./pages/proyecto/bebe/bebe.module').then( m => m.BebePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
