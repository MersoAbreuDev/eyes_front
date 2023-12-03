import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentoFormComponent } from './medicamento-form/medicamento-form.component';
import { MedicamentoSearchComponent } from './medicamento-search/medicamento-search.component';

const routes: Routes = [
  {
    path:"new",
    component:MedicamentoFormComponent
  },
  {
    path:"",
    component:MedicamentoSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentoRoutingModule { }
