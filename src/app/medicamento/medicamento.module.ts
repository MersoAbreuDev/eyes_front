import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentoRoutingModule } from './medicamento-routing.module';
import { MedicamentoSearchComponent } from './medicamento-search/medicamento-search.component';
import { MedicamentoFormComponent } from './medicamento-form/medicamento-form.component';
import { PrimeModule } from 'src/shared/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FileSizePipe } from 'src/shared/pipes/fileSize/file-size.pipe';


@NgModule({
  declarations: [
    MedicamentoSearchComponent,
    MedicamentoFormComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    MedicamentoRoutingModule,
    PrimeModule, 
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[
    MessageService,
    ConfirmationService,
    DialogService
  ]
})
export class MedicamentoModule { }
