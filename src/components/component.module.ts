import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeModule } from 'src/shared/prime.module';
import { LegendaComponent } from './legenda/legenda.component';
@NgModule({
  declarations: [
    SidebarComponent,
    LegendaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    PrimeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    SidebarComponent,
    LegendaComponent
  ]
})
export class ComponentModule { }
