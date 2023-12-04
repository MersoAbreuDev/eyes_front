import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitaRoutingModule } from './receita-routing.module';
import { ReceitaFormComponent } from './receita-form/receita-form.component';
import { ReceitaSearchComponent } from './receita-search/receita-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/shared/prime.module';
import { ComponentModule } from 'src/components/component.module';


@NgModule({
  declarations: [
    ReceitaFormComponent,
    ReceitaSearchComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ReceitaRoutingModule,
    ReactiveFormsModule,
    PrimeModule,
    FormsModule
  ],
  exports:[
    ReceitaSearchComponent
  ]
})
export class ReceitaModule { }
