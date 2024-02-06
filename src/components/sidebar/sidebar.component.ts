import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LoginService } from 'src/services/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})
export class SidebarComponent implements OnInit {
    sidebarVisible: boolean = false;
    menu!: MenuItem[];
    items!: MenuItem[];
    mostrarMenu: boolean = false;
    currentUserSubject: any;
    currentUser: any;

    constructor(private router: Router,
        private cdr: ChangeDetectorRef,
        private loginService: LoginService){
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    ngOnInit() {
        this.loginService.isAuthenticated$.subscribe(isAuthenticated => {
            this.mostrarMenu = isAuthenticated;
            console.log("Menu ",isAuthenticated );
          });
        this.items = [
            {
                label: 'Cadastros',
                icon: 'pi pi-fw pi-file',
                items: [
                    // {
                    //     label: 'Medicamentos',
                    //     items: [
                    //         {
                    //             label: 'Solicitar Novo',
                    //             icon: 'fa-solid fa-plus',
                    //             routerLink:'medicamentos/new',
                    //             styleClass: 'menu-item-color'
                    //         },
                    //         {
                    //             label: 'Consultar',
                    //             icon: 'fa-solid fa-magnifying-glass',
                    //             routerLink:'medicamentos'
                    //         }
                    //     ]
                    // },
                    // {
                    //     label: 'Embalagem',
                    //     items: [
                    //         {
                    //             label: 'Novo',
                    //             icon: 'fa-solid fa-plus',
                    //             routerLink:'embalagens/new',
                    //         },
                    //         {
                    //             label: 'Consultar',
                    //             icon: 'fa-solid fa-magnifying-glass',
                    //             routerLink:'embalagens',
                    //         }
                    //     ]
                    // },
                    {
                        label: 'Receita',
                        items: [
                            // {
                            //     label: 'Novo',
                            //     icon: 'fa-solid fa-plus',
                            //     routerLink:'receitas/new',
                            // },
                            {
                                label: 'Consultar',
                                icon: 'fa-solid fa-magnifying-glass',
                                routerLink:'receitas',
                            }
                        ],
                        
                    }
                ]
                
            }, 
        ];
    }

    logoff(){
        localStorage.clear();
        
        setTimeout(()=>{
          this.router.navigate(['login']);
          this.mostrarMenu =false;
        },1000)
      }

    public get currentUserValue(): any {
    return this.currentUserSubject.getValue();
    }
}