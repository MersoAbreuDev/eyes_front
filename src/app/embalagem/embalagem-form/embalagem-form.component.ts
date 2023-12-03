import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { IEmbalagem } from 'src/interfaces/embalagem/IEmbalagem';
import { EmbalagemService } from 'src/services/embalagem/embalagem.service';

@Component({
  selector: 'app-embalagem-form',
  templateUrl: './embalagem-form.component.html',
  styleUrls: ['./embalagem-form.component.scss']
})
export class EmbalagemFormComponent {
  form!: FormGroup;
  embalagem!:IEmbalagem;
  items!:any;
  home!:any;
  constructor( private fb: FormBuilder,
     private primengConfig: PrimeNGConfig,
     private messageService: MessageService,
     private embalagemService: EmbalagemService){}


  ngOnInit(){
    this.items = [{ label: 'CADASTRO EMBALAGEM' }];
    this.home = {   icon: ' pi pi-home ', routerLink: '/home' };
    this.primengConfig.ripple = true;
    this.initForms();
  }

  initForms(){
    this.form = this.fb.group({
      legenda:['',[Validators.required]],
      sigla:['',[Validators.required]]
    })
  }

  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  createPayload(legenda = this.getValueControl(this.form, 'legenda'),
                sigla = this.getValueControl(this.form, 'sigla')){
      const payload ={legenda, sigla};

      return payload;
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Criado com sucesso!', detail: 'Perfil criado com sucesso!'});
  }

  clear() {
    this.messageService.clear();
  }
  
  showError() {
    this.messageService.add({severity:'error', summary: 'Erro ao criar perfil!', detail: 'Perfil já cadastrado!'});
  } 

  cadastrar(){
      this.embalagemService.salvar(this.createPayload()).subscribe((response:any) =>
        {
            this.embalagem = response;
            this.form.reset();
        },
        erro => {
          if(erro.status !== 200) {
            this.showError() 
          }
      })
    
  }

  isValidForm(){
    return this.form.valid;
  }
}
