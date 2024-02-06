import { Component, ViewChild } from '@angular/core';
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
  arquivosSelecionados: File[] = [];

  @ViewChild('fileInput') fileInput:any;
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
      imagem:['',[Validators.required]],
    })
  }

  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  createPayload(imagem = this.getValueControl(this.form, 'imagem')){
      const payload ={imagem};
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
   console.log("Payload ", this.createPayload)
  }

  isValidForm(){
    return this.form.valid;
  }

  submitForm() {
    const formData = new FormData();
     for (let i = 0; i < this.arquivosSelecionados.length; i++) {
      formData.append('arquivos', this.arquivosSelecionados[i]);
    }
  }

  onFileChange(event:any) {
    this.arquivosSelecionados = Array.from(event.target.files);
  }

  removerArquivo(arquivo: File) {
    this.arquivosSelecionados = this.arquivosSelecionados.filter(a => a !== arquivo);
  }

  getImagemUrl(arquivo: File): string {
    return URL.createObjectURL(arquivo);
  }
}
