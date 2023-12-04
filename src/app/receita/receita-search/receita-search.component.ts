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
  items!: any;
  home!: any;
  receitas!: any[];
  rowsPage = [5, 10];
  requestOptions: any;
  termoPesquisa: string = '';
  matchModeOptions: SelectItem[] | undefined;

  constructor(private receitaService: ReceitaService) {}

  ngOnInit() {
    this.items = [{ label: 'CONSULTA RECEITAS' }];
    this.home = { icon: ' pi pi-home ', routerLink: '/home' };
    let params = new HttpParams();
    params = params.append('pagina', '0');
    params = params.append('quantidade', '30');
    params = params.append('ordem', 'ASC');
    params = params.append('ordenarPor', 'nome');
    this.requestOptions = { params: params };

    this.buscarMedicamentos();
  }

  transform(items: any[], term: string): any[] {
    if (!items || !term) {
      return items;
    }
    return items.filter(item => item.produto.toLowerCase().includes(term.toLowerCase()));
  }

  buscarMedicamentos() {
    this.receitaService.buscarTodos(this.requestOptions).subscribe(
      (data: any) => {
        this.receitas = this.transform(data, this.termoPesquisa);
      }
    );
  }

  onTermoPesquisaChange() {
    this.buscarMedicamentos();
  }
}