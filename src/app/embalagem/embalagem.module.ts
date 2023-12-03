import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbalagemRoutingModule } from './embalagem-routing.module';
import { EmbalagemFormComponent } from './embalagem-form/embalagem-form.component';
import { EmbalagemSearchComponent } from './embalagem-search/embalagem-search.component';
import { PrimeModule } from 'src/shared/prime.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmbalagemFormComponent,
    EmbalagemSearchComponent
  ],
  imports: [
    CommonModule,
    EmbalagemRoutingModule,
    PrimeModule,
    ReactiveFormsModule
  ]
})
export class EmbalagemModule { }
