import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';
import { LoginService } from 'src/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  value3!: string;
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private localStorageService: LocalStorageService,
              private router: Router){}



  ngOnInit(){
    this.initForms()
  }


  initForms(){
    this.form = this.fb.group({
      email:['',[Validators.required]],
      senha:['', [Validators.required]]
    })
  }

  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  createPayloadLogin(
    email = this.getValueControl(this.form, 'email'),
    senha = this.getValueControl(this.form, 'senha'))
  {
    const payload ={email, senha}

    return payload;
  }
  
  login(){
    if(this.isValidForm()){
      const {email} = this.createPayloadLogin();
      this.loginService.login(this.createPayloadLogin())
      .subscribe((res:any)=>{
        let {token} = res;
        this.localStorageService.setLocalStorage('token', JSON.stringify(token))
        this.localStorageService.setLocalStorage('usuario', JSON.stringify(email))
        this.navigateURL('home');
      })
    }

  }

  isValidForm(){
    return this.form.valid;
  }

  navigateURL(url: string){
    this.router.navigate([`/${url}`])
  }
}
