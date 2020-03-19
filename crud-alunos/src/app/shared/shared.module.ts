import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import {  BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { CheckboxTableComponent } from './checkbox-table/checkbox-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { DropdownService } from './services/dropdown.service';




@NgModule({
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent,
    CheckboxTableComponent,
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
  ],
    
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule,

  ],

  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
    CheckboxTableComponent,

  ],
  providers:[BsModalRef,DropdownService],
  
})
export class SharedModule { }


