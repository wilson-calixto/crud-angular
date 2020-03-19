import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

export abstract class BaseFormComponent implements OnInit {
  @Input() element;// = { _id: '', nome: 'testststs', turma: 'testststs' };

  form: FormGroup
  result: Subject<any>;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

  }
  
  abstract populaForm();

  setElemento(element) {
    this.element = element
    this.populaForm()
  }
  

  cancelar() {
    this.bsModalRef.hide();
  }



  verificaSeValido() {
    this.verificaValidacoesForm(this.form);
    const ehvalido = this.formulaEhValido();

    if (ehvalido) {
      this.bsModalRef.hide();
    }

    this.result.next({
      'form': this.form,
      'ehvalido': ehvalido
    });


  }

  formulaEhValido() {
    console.log('this.form', !this.form.valid)
    return this.form.valid
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
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