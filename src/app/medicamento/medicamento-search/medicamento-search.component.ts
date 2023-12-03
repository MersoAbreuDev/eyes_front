import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { IMedicamento } from 'src/interfaces/medicamento/IMedicamento';
import { MedicamentoService } from 'src/services/medicamento/medicamento.service';

@Component({
  selector: 'app-medicamento-search',
  templateUrl: './medicamento-search.component.html',
  styleUrls: ['./medicamento-search.component.scss']
})
export class MedicamentoSearchComponent {

  cols!: any[];
  items!:any;
  home!:any;
  medicamentos!: IMedicamento[];
  requestOptions:any;

  matchModeOptions: SelectItem[] | undefined;

  constructor( private filterService: FilterService,
              private medicamentosService: MedicamentoService) {}

  ngOnInit() {
      this.items = [{ label: 'CONSULTA MEDICAMENTOS' }];
      this.home = {   icon: ' pi pi-home ', routerLink: '/home' };
      let params = new HttpParams();
      params = params.append('pagina', 0);
      params = params.append('quantidade',1000);
      params = params.append('ordem', "ASC");
      params = params.append('ordenarPor', "nome");
      this.requestOptions = { params: params };
      const customFilterName = 'custom-equals';

      this.filterService.register(customFilterName, (value:any, filter:any): boolean => {
          if (filter === undefined || filter === null || filter.trim() === '') {
              return true;
          }

          if (value === undefined || value === null) {
              return false;
          }

          return value.toString() === filter.toString();
      });

      this.cols = [
          { field: 'nome', header: 'Nome' },
          { field: 'dosagem', header: 'Dosagem' },
      ];

      this.matchModeOptions = [
          { label: 'Igual', value: customFilterName },
          { label: 'Começa com', value: FilterMatchMode.STARTS_WITH },
          { label: 'Contém', value: FilterMatchMode.CONTAINS }
      ];

       //this.carService.getCarsMedium().then((data:any) => (this.medicamentos = data));

    this.buscarMedicamentos();
  }

  buscarMedicamentos(){
    this.medicamentosService.buscarTodos(this.requestOptions).subscribe((data:any) => this.medicamentos= data);
  }

  editar(){
    alert("Editar")
  }
  excluir(){
    alert("Excluir")
  }
}
