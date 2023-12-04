import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login',
    loadChildren: () => import('../components/login/login.module').then( m => m.LoginModule)
  },
  {
    path:"home",
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path:"medicamentos",
    loadChildren: () => import('../app/medicamento/medicamento.module').then(m => m.MedicamentoModule),
    canActivate:[AuthGuard]
  },
  {
    path:"embalagens",
    loadChildren: () => import('../app/embalagem/embalagem.module').then(m => m.EmbalagemModule),
    canActivate:[AuthGuard]
  },
  {
    path:"receitas",
    loadChildren: () => import('../app/receita/receita.module').then(m => m.ReceitaModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
