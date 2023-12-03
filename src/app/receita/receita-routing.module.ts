import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaFormComponent } from './receita-form/receita-form.component';
import { ReceitaSearchComponent } from './receita-search/receita-search.component';

const routes: Routes = [
  {
    path:"new",
    component:ReceitaFormComponent
  },
  {
    path:"",
    component:ReceitaSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
