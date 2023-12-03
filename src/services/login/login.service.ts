import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { SERVER_URI } from 'src/enviroments/server';
import { UtilsService } from 'src/utils/utils.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  returnUrl:string="";
  private isAuthenticated = new BehaviorSubject<boolean>(false)
  mostrarMenuEmitter = new EventEmitter<boolean>();
  
    constructor(private http: HttpClient, 
                private router : Router,
                private utilsService: UtilsService,
               ) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.getValue();
  }

  get isAuthenticated$() {
    return this.isAuthenticated.asObservable();
  }

  login(usuario: any) {
    return this.http.post<any>(`${SERVER_URI}/api/v1/auth/authenticate`, usuario).pipe(
      map(data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.isAuthenticated.next(true);
        this.utilsService.showSuccess("Sucesso!"); 
        return data;
      }),
      catchError((err) => {
        if (err.status === 403) {
          this.utilsService.showError("Erro de login ou senha!");
        } else if (err.status === 404) {
          this.utilsService.showError(err.error.message);
        } else if (err.status === 0 && err.status !== 404) {
          this.utilsService.showError('Ocorreu um erro na aplicação, tente novamente!');
        } else {
          this.utilsService.showError("Ocorreu um erro no servidor, tente mais tarde!");
        }
        return throwError(() => err);
      })
    );
  }

   logout() {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('username');
      this.isAuthenticated.next(false);
      this.router.navigate(['login']);
    }

    setUserName(login:string): void{
        localStorage.setItem('username', JSON.stringify(login));
    }

    getUserName(){
        return JSON.parse(localStorage.getItem('login')!);
    }

    esqueciMinhaSenha(login:string):Observable<any>{
        return this.http.post(`${SERVER_URI}usuarios/forgot_password`, login)
    }
}
