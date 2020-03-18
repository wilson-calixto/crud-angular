import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  setAluno(element){
    this.element=element
    this.populaForm()
  }
  
  populaForm(){

    this.form.get('_id').setValue(this.element._id)
    this.form.get('nome').setValue(this.element.nome)
    this.form.get('turma').setValue(this.element.turma)
  

  }

  
  formulaEhValido(){
    console.log('this.form',!this.form.valid)
    return this.form.valid
  }

  verificaSeValido(){
    const ehvalido = this.formulaEhValido();
    
    if(ehvalido){
      this.bsModalRef.hide();
    }

    this.result.next({
      'form':this.form,
      'ehvalido': ehvalido
    });


  }
  cancelar(){
    this.bsModalRef.hide();
  }


}