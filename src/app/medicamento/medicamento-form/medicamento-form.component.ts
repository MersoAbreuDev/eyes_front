import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { IMedicamento } from 'src/interfaces/medicamento/IMedicamento';
import { MedicamentoService } from 'src/services/medicamento/medicamento.service';

@Component({
  selector: 'app-medicamento-form',
  templateUrl: './medicamento-form.component.html',
  styleUrls: ['./medicamento-form.component.scss']
})
export class MedicamentoFormComponent {
  form!: FormGroup;
  medicamento!:IMedicamento;
  items!:any;
  home!:any;
  constructor( private fb: FormBuilder,
     private primengConfig: PrimeNGConfig,
     private messageService: MessageService,
     private medicamentosService: MedicamentoService){}


  ngOnInit(){
    this.items = [{ label: 'CADASTRO MMEDICAMENTOS' }];
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
   
      this.medicamentosService.salvar(this.createPayload()).subscribe((response:any) =>
        {
            this.medicamento = response;
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
