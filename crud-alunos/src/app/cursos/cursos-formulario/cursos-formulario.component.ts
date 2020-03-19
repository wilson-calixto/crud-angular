import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-cursos-formulario',
  templateUrl: './cursos-formulario.component.html',
  styleUrls: ['./cursos-formulario.component.scss']
})
export class CursosFormularioComponent implements OnInit {
  @Input() element = {_id:'',nome:'testststs',turma:'testststs'};

  form:FormGroup
  result: Subject<any>;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,    
    ) { }

  ngOnInit(): void {
    this.form  = this.fb.group({
      _id: [''],
      nome:['',[Validators.required,Validators.minLength(5)]],
      turma:['',[Validators.required,Validators.minLength(5)]]

    });

    this.result=new Subject();
    this.populaForm()
  }
  setElemento(element){
    this.element=element
    this.populaForm()
  }
  
  populaForm(){

    this.form.get('_id').setValue(this.element._id)
    this.form.get('nome').setValue(this.element.nome)
    this.form.get('turma').setValue(this.element.turma)
  

  }

  cancelar(){
    this.bsModalRef.hide();
  }



  verificaSeValido(){
    this.verificaValidacoesForm(this.form); 
    const ehvalido = this.formulaEhValido();

    if(ehvalido){
      this.bsModalRef.hide();
    }

    this.result.next({
      'form':this.form,
      'ehvalido': ehvalido
    });


  }
 
  formulaEhValido(){
    console.log('this.form',!this.form.valid)
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