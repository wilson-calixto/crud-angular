import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlunoFormularioComponent } from '../alunos/aluno-formulario/aluno-formulario.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService,
    private dialog: MatDialog,
  ) { }


  openGenericEditModal(element, FormularioComponent) {
    let title='Cadastro'

    if (element !== null && element!==undefined) {
      title='Edição';
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      id: 1,
      title: title,
      default_label: 'Brands',
      // inputParameters:[{name:'nomeDoAluno',value:'alex'},{name:'nomeDaTurma',value:'b'}],
      // parameters:[{name:'test',value:'1'},{name:'aoc',value:'2'}],
      element: element
    };

    dialogConfig.width = '17%';

    console.log('dialogConfig',dialogConfig)
  return this.dialog.open(FormularioComponent, dialogConfig);
  }

openEditModal(aluno){
  let initialState;

  if (aluno !== null) {
    initialState = {
      aluno: aluno,
    };
  }

  const bsModalRef: BsModalRef = this.modalService.show(AlunoFormularioComponent, { initialState });
  console.log('result aluno', (<AlunoFormularioComponent>bsModalRef.content).result)

  return (<AlunoFormularioComponent>bsModalRef.content).result;


}
showConfirm(title: string, message: string, okTxt ?: string, cancelTxt ?: string) {
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

  private showAlert(message, type = 'success', dismissTimeout ?: number) {
  const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
  bsModalRef.content.message = message;
  bsModalRef.content.type = type;
  if (dismissTimeout) {
    setTimeout(() => bsModalRef.hide(), dismissTimeout);
  }

}
showAlertDanger(message) {
  this.showAlert(message, 'danger', 3000);
}

showAlertSuccess(message) {
  this.showAlert(message, 'success', 1000);
}
}
