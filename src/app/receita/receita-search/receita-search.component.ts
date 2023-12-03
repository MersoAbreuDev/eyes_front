import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { IReceita } from 'src/interfaces/receita/IReceita';
import { ReceitaService } from 'src/services/receita/receita.service';

@Component({
  selector: 'app-receita-search',
  templateUrl: './receita-search.component.html',
  styleUrls: ['./receita-search.component.scss']
})
export class ReceitaSearchComponent {

  cols!: any[];
  items!:any;
  home!:any;
  receitas!: any[];

  requestOptions:any;

  matchModeOptions: SelectItem[] | undefined;

  constructor( private filterService: FilterService,
              private receitaService: ReceitaService) {}

  ngOnInit() {
      this.items = [{ label: 'CONSULTA RECEITAS' }];
      this.home = {   icon: ' pi pi-home ', routerLink: '/home' };
      let params = new HttpParams();
      params = params.append('pagina', 0);
      params = params.append('quantidade',5);
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
          {field: 'produto', header:'Produto'},
      ];

      this.matchModeOptions = [
          { label: 'Igual', value: customFilterName },
          { label: 'Começa com', value: FilterMatchMode.STARTS_WITH },
          { label: 'Contém', value: FilterMatchMode.CONTAINS }
      ];

    this.buscarMedicamentos();
  }

  buscarMedicamentos(){
    this.receitaService.buscarTodos(this.requestOptions).subscribe(
      (data:any) => 
      this.receitas = data
    );
  }

  editar(){
    alert("Editar")
  }
  excluir(){
    alert("Excluir")
  }
}
