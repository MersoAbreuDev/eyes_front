import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { IEmbalagem } from 'src/interfaces/embalagem/IEmbalagem';
import { EmbalagemService } from 'src/services/embalagem/embalagem.service';

@Component({
  selector: 'app-embalagem-search',
  templateUrl: './embalagem-search.component.html',
  styleUrls: ['./embalagem-search.component.scss']
})
export class EmbalagemSearchComponent {
  cols!: any[];
  items!:any;
  home!:any;
  embalagens!: IEmbalagem[];
  requestOptions:any;

  matchModeOptions: SelectItem[] | undefined;

  constructor( private filterService: FilterService,
              private embalagemService: EmbalagemService) {}

  ngOnInit() {
      this.items = [{ label: 'CONSULTA EMBALAGENS' }];
      this.home = {   icon: ' pi pi-home ', routerLink: '/home' };
      let params = new HttpParams();
      params = params.append('pagina', 0);
      params = params.append('quantidade',1000);
      params = params.append('ordem', "ASC");
      params = params.append('ordenarPor', "legenda");
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
          { field: 'legenda', header: 'Legenda' },
          { field: 'sigla', header: 'Sigla' },
      ];

      this.matchModeOptions = [
          { label: 'Igual', value: customFilterName },
          { label: 'Começa com', value: FilterMatchMode.STARTS_WITH },
          { label: 'Contém', value: FilterMatchMode.CONTAINS }
      ];

    this.buscarMedicamentos();
  }

  buscarMedicamentos(){
    this.embalagemService.buscarTodos(this.requestOptions).subscribe((data:any) => this.embalagens= data);
  }

  editar(){
    alert("Editar")
  }
  excluir(){
    alert("Excluir")
  }
}
