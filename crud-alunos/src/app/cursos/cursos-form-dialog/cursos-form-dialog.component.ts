import { Component, OnInit, Inject, Input } from '@angular/core';
import { BaseFormDialogComponent } from 'src/app/shared/base-form-dialog/base-form-dialog.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilterDialogComponent } from 'src/app/shared/filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-cursos-form-dialog',
  templateUrl: './cursos-form-dialog.component.html',
  styleUrls: ['./cursos-form-dialog.component.scss']
})
export class CursosFormDialogComponent extends BaseFormDialogComponent {
  @Input() element = { _id: '', nome: 'testststs'};
  
  constructor(protected fb: FormBuilder,
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    super(fb, dialogRef, data)
    if(this.inputData.element!==null){
      this.element=this.inputData.element
    }
    // console.log('this.element finlho',this.element)

    this.iniciaForm()
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
    this.form = this.fb.group(this.formFields);
  }

  populaForm(){
    this.form.get('_id').setValue(this.element._id)
    this.form.get('nome').setValue(this.element.nome)
  }


}
