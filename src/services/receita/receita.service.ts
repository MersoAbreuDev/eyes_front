import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { SERVER_URI } from 'src/enviroments/servers/server';
import { UtilsService } from 'src/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient,
      private router: Router,
     private utilsService: UtilsService) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '/*'
    })
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.getValue();
  }

  salvar(dados: any): Observable<any> {
    return this.http.post(`${SERVER_URI}/receitas`,dados)
      .pipe(
        catchError((err)=>{
          if(err.status != 200){
            this.utilsService.showError(err.error.message)
          }
          return throwError(()=> err)
        })
      ).pipe(map(data => {
                catchError((err)=>{
                  if(err.status == 200){
                      this.utilsService.showError("Sucesso!")
                     
                  }
                  return throwError(()=> err)
              })
              localStorage.setItem('currentUser', JSON.stringify(data));
              this.currentUserSubject.next(data);
              return data;
        })
      )
  }
    
  buscarTodos(data: any): Observable<any> {
    return this.http.get(`${SERVER_URI}/medicamentos`, data).pipe(map((data: any) => {
      this.currentUserSubject.next(data);
      return data;
    }));;
  }
}
