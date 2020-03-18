import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlunoFormularioComponent } from '../alunos/aluno-formulario/aluno-formulario.component';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }
  

  openGenericEditModal(element,FormularioComponent){
    let initialState;
    
    if(element!==null){
      initialState = {
        aluno : element,
      };
    }


    const bsModalRef: BsModalRef = this.modalService.show(FormularioComponent,{initialState});
    return (<any>bsModalRef.content).result;
  }

  openEditModal(aluno){
    let initialState;
    
    if(aluno!==null){
      initialState = {
        aluno : aluno,
      };
    }

    const bsModalRef: BsModalRef = this.modalService.show(AlunoFormularioComponent,{initialState});
    return (<AlunoFormularioComponent>bsModalRef.content).result;


  }
  showConfirm(title: string, message: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

  private showAlert(message, type='success',dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.message = message;
    bsModalRef.content.type = type;
    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }

  }
  showAlertDanger(message) {
    this.showAlert(message,'danger',3000);
  }
  
  showAlertSuccess(message) {
    this.showAlert(message,'success',1000);
  }
}
