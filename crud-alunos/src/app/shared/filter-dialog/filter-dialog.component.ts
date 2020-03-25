import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { BaseFormDialogComponent } from '../base-form-dialog/base-form-dialog.component';
// interface Food {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent extends BaseFormDialogComponent {
  constructor(protected fb: FormBuilder,
              public dialogRef: MatDialogRef<FilterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data){              
              super(fb,dialogRef,data)
              this.inputData = data;

              console.log('this.inputData',this.inputData)
  }

  iniciaForm(){
    this.criaForm()
    this.populaForm()
  }

 
  criaForm(){
    // for(var i = 0; i < this.inputData.parameters.length; i++){
    //   if(this.inputData.parameters[i]){
    //     this.formFields[this.inputData.parameters[i].name]=[this.inputData.parameters[i].value,[Validators.required]];
    //   }
    // }
    this.formFields['_id']=['']
    this.formFields['nome']=[Validators.required,Validators.minLength(2)]
    this.formFields['turma']=[Validators.required,Validators.minLength(2)]
    this.form = this.fb.group(this.formFields);
  }

  populaForm(){
    this.form.get('_id').setValue(this.inputData.element._id)
    this.form.get('nome').setValue(this.inputData.element.nome)
    this.form.get('turma').setValue(this.inputData.element.turma)
  }

}
