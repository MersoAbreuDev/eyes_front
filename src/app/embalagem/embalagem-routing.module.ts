import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbalagemFormComponent } from './embalagem-form/embalagem-form.component';
import { EmbalagemSearchComponent } from './embalagem-search/embalagem-search.component';

const routes: Routes = [
  {
    path:"new",
    component:EmbalagemFormComponent
  },
  {
    path:"",
    component:EmbalagemSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbalagemRoutingModule { }
