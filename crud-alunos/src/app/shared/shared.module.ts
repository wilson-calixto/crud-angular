import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import {  BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [AlertModalComponent, ConfirmModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),

  ],
  providers:[BsModalRef]
})
export class SharedModule { }
