import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { IReceita } from 'src/interfaces/receita/IReceita';
import { EmbalagemService } from 'src/services/embalagem/embalagem.service';
import { MedicamentoService } from 'src/services/medicamento/medicamento.service';
import { ReceitaService } from 'src/services/receita/receita.service';

@Component({
  selector: 'app-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.scss']
})
export class ReceitaFormComponent {
  form!: FormGroup;
  receita!:IReceita;
  items!:any;
  home!:any;
  constructor( private fb: FormBuilder,
     private primengConfig: PrimeNGConfig,
     private messageService: MessageService,
     private embalagemService: EmbalagemService,
     private medicamentoService: MedicamentoService,
     private receitaService: ReceitaService){}


  ngOnInit(){
    this.items = [{ label: 'CADASTRO RECEITA' }];
    this.home = {   icon: ' pi pi-home ', routerLink: '/home' };
    this.primengConfig.ripple = true;
    this.initForms();
  }

  initForms(){
    this.form = this.fb.group({
      nome:['',[Validators.required]],
      dosagem:['',[Validators.required]]
    })
  }

  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  createPayload(nome = this.getValueControl(this.form, 'nome'),
                dosagem = this.getValueControl(this.form, 'dosagem')){
      const payload ={nome, dosagem};

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
   
      this.receitaService.salvar(this.createPayload()).subscribe((response:any) =>
        {
            this.receita = response;
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
