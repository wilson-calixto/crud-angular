import { Component, OnInit, Inject, Optional, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export abstract class BaseFormDialogComponent implements OnInit {
  @Input() element;// = { _id: '', nome: 'testststs', turma: 'testststs' };

  form: FormGroup;
  result$;

  description:string;
  inputData=null;
  formFields={};
  parameters_errors=null;
  deepClone=null;
  defaultBrand='all_brands';
  selectedBrand=null;
  content;
  constructor(protected fb: FormBuilder,
              public dialogRef: MatDialogRef<BaseFormDialogComponent,FilterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data){
              this.inputData = data;
                

              this.result$=new Subject();
              // console.log('element pai ',this.element);      
  }
  ngOnInit() {
    this.result$=new Subject();

  }



  cancelar() { 
      this.dialogRef.close(null);
  }

  iniciaForm(){}
 

  setElemento(element) {
    this.element = element
    // this.populaForm()
  }
  

  



  verificaSeValido() {
    this.verificaValidacoesForm(this.form);
    const ehvalido = this.formulaEhValido();

    if (ehvalido) {
      this.dialogRef.close(this.form.value);
    }



  }

  formulaEhValido() {
    // console.log('this.form', !this.form.valid)
    return this.form.valid
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      // console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificaValidTouched(campo: string) {
    return (
      !this.form.get(campo).valid &&
      (this.form.get(campo).touched || this.form.get(campo).dirty)
    );
  }

  verificaRequired(campo: string) {
    return (
      this.form.get(campo).hasError('required') &&
      (this.form.get(campo).touched || this.form.get(campo).dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.form.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

}
