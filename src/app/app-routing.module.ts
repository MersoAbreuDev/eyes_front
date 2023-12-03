import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterGuard } from 'src/guards/router.guard';

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
    canActivate:[RouterGuard]
  },
  {
    path:"medicamentos",
    loadChildren: () => import('../app/medicamento/medicamento.module').then(m => m.MedicamentoModule),
    canActivate:[RouterGuard]
  },
  {
    path:"embalagens",
    loadChildren: () => import('../app/embalagem/embalagem.module').then(m => m.EmbalagemModule),
    canActivate:[RouterGuard]
  },
  {
    path:"receitas",
    loadChildren: () => import('../app/receita/receita.module').then(m => m.ReceitaModule),
    canActivate:[RouterGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
